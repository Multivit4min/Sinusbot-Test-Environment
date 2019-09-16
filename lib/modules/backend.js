"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Backend {
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
exports.default = Backend;
