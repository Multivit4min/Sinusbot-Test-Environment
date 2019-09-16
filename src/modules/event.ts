import { SinusbotModule } from "./Abstract"
import { Sinusbot } from "../Sinusbot"
import { Client } from "./interface/Client"
import { Channel } from "./interface/Channel"

export interface Event {
  emit(name: "chat", data: Event.ChatTarget): void
}

export class Event extends SinusbotModule {

  eventHandler: Record<string, Function[]> = {}

  /**
   * @param {string} backend the backend which should be retrieved
   */
  emit(event: string, data: any) {
    if (!Array.isArray(this.eventHandler[event])) return this
    this.eventHandler[event].forEach(cb => cb(data))
    return this
  }

  chat(data: Partial<Event.Chat>) {
    this.emit("chat", {
      mode: Event.ChatTarget.PRIVATE,
      text: "",
      client: Sinusbot.createClient().buildModule(),
      channel: Sinusbot.createChannel().buildModule(),
      ...data
    })
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