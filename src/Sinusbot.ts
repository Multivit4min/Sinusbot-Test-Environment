import * as vm from "vm"
import * as registerPlugin from "./globals/registerPlugin"
import * as sinusRequire from "./globals/require"
import Engine from "./modules/engine"
import Event from "./modules/event"
import Backend from "./modules/backend"
import Format from "./modules/format"
import { Client } from "./modules/interface/Client"

export class Sinusbot {

  modules: Sinusbot.ModuleInterface = Sinusbot.createModules()
  config: Record<string, any> = {}
  script: string = ""
  context: Record<string, any> = {}

  static createClient() {
    const client = new Client()
    return client
  }

  static createModules(): Sinusbot.ModuleInterface {
    return {
      engine: new Engine(),
      backend: new Backend(),
      event: new Event(),
      format: new Format()
    }
  }

  /**
   * sets the current config which will be given to the registerPlugin
   * @param config the config to pass to the registerPlugin function
   */
  setConfig(config: Record<string, any> = {}) {
    this.config = config
    return this
  }

  /**
   * sets the script which should get executed
   * @param script sets the current script to run 
   */
  setScript(script: string) {
    this.script = script
    return this
  }

  /**
   * adds data to the context
   * @param context context data to add to the globals
   */
  addToContext(context: Record<string, any>) {
    this.context = {
      ...this.context,
      ...context
    }
    return this
  }

  /**
   * retrieves the current context
   */
  getContext() {
    return this.context
  }

  /**
   * Prepares the global variables for use
   */
  private prepareContext() {
    const register = registerPlugin.configure(this.config)
    const req = sinusRequire.configure(this.getModules())
    this.addToContext({
      registerPlugin: register,
      require: req,
      module: this.getModuleNamespace()
    })
  }

  /** retrieves the module namespace */
  private getModuleNamespace() {
    return {
      "exports": null 
    }
  }

  /**
   * retrieve used modules
   */
  private getModules()  {
    const modules: Record<string, Record<string, Function>> = {}
    Object.keys(this.modules)
      //@ts-ignore
      .map(name => modules[name] = this.modules[name].buildModule())
    return modules
  }

  /**
   * runs the current script
   */
  run() {
    this.prepareContext()
    const context = vm.createContext(this.context)
    vm.runInContext(this.script, context)

    context.module.exports
      .createCommand("test")
      .addAlias("test1")
      .exec((...args: any[]) => {
        console.log({ args })
        console.log("executed... with alias")
      })

    this.modules.event.emit("chat", {
      text: "!test1",
      client: Sinusbot.createClient().buildModule()
    })

  }
}

export namespace Sinusbot {
  export interface ModuleInterface {
    backend: Backend
    event: Event
    engine: Engine
    format: Format
  }
}