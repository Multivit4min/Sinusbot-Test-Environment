import { SinusbotModule } from "../Abstract"

export class Client extends SinusbotModule {

  /** output of client.isSelf() */
  self: boolean = false
  /** function for client.chat() */
  chatMock = this.logFunctionCall("chat")
  /** uid of the user */
  uid = "NF61yPIiDvYuOJ/Bbeod84bw6dE="
  /** name of the client */
  name = "FooBar"

  buildModule() {
    const client = this
    return {
      isSelf() {
        return client.self
      },
      chat(message: string) {
        return client.chatMock(message)
      },
      uid() {
        return client.uid
      },
      name() {
        return client.name
      }
    }
  }
}