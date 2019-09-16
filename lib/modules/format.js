"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Format extends Abstract_1.SinusbotModule {
    buildModule() {
        const format = this;
        return {
            bold(str) {
                throw new Error("not implemented");
            },
            code(str) {
                throw new Error("not implemented");
            }
        };
    }
}
exports.Format = Format;
