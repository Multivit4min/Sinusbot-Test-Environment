import { SinusbotModule } from "./Abstract"

export class Format extends SinusbotModule {

  buildModule() {
    const format = this
    return {
      /** formats the input string to bold */
      bold(str: string) {
        if (format.sinusbot.engine.backend === "ts3") {
          return `[b]${str}[/b]`
        } else {
          return `**${str}**`
        }
      },
      /** formats the input string to a code format */
      code(str: string) {
        if (format.sinusbot.engine.backend === "ts3") return str
        return `\`\`\`${str}\`\`\``
      }
    }
  }
}