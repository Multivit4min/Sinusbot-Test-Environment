import { SinusbotModule } from "./Abstract"

export class Format extends SinusbotModule {

  backend: "ts3"|"discord" = "ts3"

  setBackend(backend: "ts3"|"discord") {
    this.backend = backend
    return this
  }

  buildModule() {
    const format = this
    return {
      bold(str: string) {
        if (format.backend === "ts3") {
          return `[b]${str}[/b]`
        } else {
          return `**${str}**`
        }
      },
      code(str: string) {
        if (format.backend === "ts3") return str
        return `\`\`\`${str}\`\`\``
      }
    }
  }
}