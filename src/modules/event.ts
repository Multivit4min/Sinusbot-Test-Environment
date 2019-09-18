import { SinusbotModule } from "./Abstract"

export interface Event {
  emit(name: "chat", data: Event.ChatTarget): void
}

export class Event extends SinusbotModule {

  eventHandler: Record<string, Function[]> = {}

  /**
   * emits an event to the scripting engine
   * @param {string} backend the backend which should be retrieved
   */
  emit(event: string, data: any) {
    if (!Array.isArray(this.eventHandler[event])) return this
    this.eventHandler[event].forEach(cb => cb(data))
    return this
  }

  /**
   * emits a chat event to the sinusbot scripting engine
   * @param data the payload data for the event
   */
  chat(data: Partial<Event.Chat>) {
    this.emit("chat", {
      mode: Event.ChatTarget.PRIVATE,
      text: "",
      client: this.sinusbot.createClient().buildModule(),
      channel: this.sinusbot.createChannel().buildModule(),
      ...data
    })
  }

  /** registers a new event handler */
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

export namespace Event {
  export enum ChatTarget {
    PRIVATE = 1,
    CHANNEL = 2,
    SERVER = 3
  }
  export interface Chat {
    text: string,
    channel: any,
    client: any,
    mode: Event.ChatTarget
  }
}