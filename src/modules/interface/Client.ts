import { SinusbotModule } from "../Abstract"

export class Client extends SinusbotModule {

  /** output of client.isSelf() */
  self: boolean = false
  /** function for client.chat() */
  chatMock = this.logFunctionCall("chat")

  buildModule() {
    const client = this
    return {
      isSelf() {
        return client.self
      },
      chat(message: string) {
        return client.chatMock(message)
      }
    }
  }
}