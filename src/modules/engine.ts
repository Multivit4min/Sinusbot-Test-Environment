import { SinusbotModule } from "./Abstract"

export class Engine extends SinusbotModule {

  backend: string = "ts3"
  commandprefix: string = ""

  /**
   * @param backend the backend which should be retrieved
   */
  setBackend(backend: string) {
    this.backend = backend
    return this
  }

  /**
   * sets a new command prefix
   * @param prefix 
   */
  setCommandPrefix(prefix: string) {
    this.commandprefix = prefix
    return this
  }

  /**
   * gets the module object
   */
  buildModule() {
    const engine = this
    return {
      getBackend() {
        return engine.backend
      },
      getCommandPrefix() {
        return engine.commandprefix
      },
      log(...data: any[]) {
        return console.log("Engine#log()", ...data)
      }
    }
  }
}