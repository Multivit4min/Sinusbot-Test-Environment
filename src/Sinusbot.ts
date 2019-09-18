import * as vm from "vm"
import * as registerPlugin from "./globals/registerPlugin"
import * as sinusRequire from "./globals/require"
import { Engine } from "./modules/engine"
import { Event } from "./modules/event"
import { Backend } from "./modules/backend"
import { Format } from "./modules/format"
import { Client } from "./modules/interface/Client"
import { Channel } from "./modules/interface/Channel"

export class Sinusbot {

  config: Record<string, any> = {}
  script: string = ""
  context: Record<string, any> = {}
  engine = new Engine(this)
  backend = new Backend(this)
  event = new Event(this)
  format = new Format(this)

  createClient() {
    const client = new Client(this)
    return client
  }

  createChannel() {
    const channel = new Channel(this)
    return channel
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
      module: { exports: null }
    })
  }

  /**
   * retrieve used modules
   */
  private getModules()  {
    return {
      event: this.event.buildModule(),
      backend: this.backend.buildModule(),
      engine: this.engine.buildModule(),
      format: this.format.buildModule()
    }
  }

  /**
   * runs the current script
   * @returns the exported values from the script
   */
  run(): any {
    this.prepareContext()
    const context = vm.createContext(this.context)
    vm.runInContext(this.script, context)
    return context.module.exports
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