import { SinusbotModule } from "../Abstract"

export class Client extends SinusbotModule {
  self: boolean = false

  buildModule() {
    const client = this
    return {
      isSelf() {
        return client.self
      },
      chat(message: string) {
        console.log("client#chat()", message)
      }
    }
  }
}