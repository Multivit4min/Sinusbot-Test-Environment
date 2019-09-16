import { SinusbotModule } from "./Abstract"

export default class Backend extends SinusbotModule {

  buildModule() {
    const backend = this
    return {
      getClientByName(name: string) {
        throw new Error("not implemented")
      },
      chat(message: string) {
        console.log("backend#chat():", message)
      }
    }
  }
}