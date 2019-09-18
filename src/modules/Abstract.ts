import { Sinusbot } from "../Sinusbot";

export abstract class SinusbotModule {

  protected sinusbot: Sinusbot

  constructor(sinusbot: Sinusbot) {
    this.sinusbot = sinusbot
  }

  /**
   * 
   * @param method the function name which has been called
   */
  logFunctionCall(method: string) {
    return (...args: any[]) => {
      console.log(`${this.constructor.name}#${method}()`, ...args)
    }
  }

  /**
   * the module data which gets exported to the sinusbot engine
   */
  abstract buildModule(): Record<string, any>
}