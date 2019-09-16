import { SinusbotModule } from "./Abstract"

export class Format extends SinusbotModule {

  buildModule() {
    const format = this
    return {
      bold(str: string) {
        throw new Error("not implemented")
      },
      code(str: string) {
        throw new Error("not implemented")
      }
    }
  }
}