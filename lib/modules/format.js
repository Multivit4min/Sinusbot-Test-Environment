"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Format extends Abstract_1.SinusbotModule {
    constructor() {
        super(...arguments);
        this.backend = "ts3";
    }
    setBackend(backend) {
        this.backend = backend;
        return this;
    }
    buildModule() {
        const format = this;
        return {
            bold(str) {
                if (format.backend === "ts3") {
                    return `[b]${str}[/b]`;
                }
                else {
                    return `**${str}**`;
                }
            },
            code(str) {
                if (format.backend === "ts3")
                    return str;
                return `\`\`\`${str}\`\`\``;
            }
        };
    }
}
exports.Format = Format;
