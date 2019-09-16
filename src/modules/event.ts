import { SinusbotModule } from "./Abstract"

export default class Event extends SinusbotModule {

  eventHandler: Record<string, Function[]> = {}

  /**
   * @param {string} backend the backend which should be retrieved
   */
  emit(event: string, data: any) {
    if (!Array.isArray(this.eventHandler[event])) return this
    this.eventHandler[event].forEach(cb => cb(data))
    return this
  }

  addHandler(event: string, callback: Function) {
    if (!Array.isArray(this.eventHandler[event]))
      this.eventHandler[event] = []
    this.eventHandler[event].push(callback)
    return this
  }

  buildModule() {
    const event = this
    return {
      on(name: string, callback: Function) {
        event.addHandler(name, callback)
      }
    }
  }
}