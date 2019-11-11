"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Backend extends Abstract_1.SinusbotModule {
    buildModule() {
        const backend = this;
        return {
            getClientByName(name) {
                throw new Error("not implemented");
            },
            chat(message) {
                console.log("backend#chat():", message);
            }
        };
    }
}
exports.Backend = Backend;
