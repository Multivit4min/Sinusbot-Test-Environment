import { SinusbotModule } from "../Abstract"

export class Client extends SinusbotModule {
  self: boolean = false
  chatMock = (msg: string) => console.log("client#chat()", msg)

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