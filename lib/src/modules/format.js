"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Format extends Abstract_1.SinusbotModule {
    buildModule() {
        const format = this;
        return {
            /** formats the input string to bold */
            bold(str) {
                if (format.sinusbot.engine.backend === "ts3") {
                    return `[b]${str}[/b]`;
                }
                else {
                    return `**${str}**`;
                }
            },
            /** formats the input string to a code format */
            code(str) {
                if (format.sinusbot.engine.backend === "ts3")
                    return str;
                return `\`\`\`${str}\`\`\``;
            }
        };
    }
}
exports.Format = Format;
