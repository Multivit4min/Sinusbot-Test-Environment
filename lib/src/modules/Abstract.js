"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinusbotModule {
    constructor(sinusbot) {
        this.sinusbot = sinusbot;
    }
    /**
     *
     * @param method the function name which has been called
     */
    logFunctionCall(method) {
        return (...args) => {
            console.log(`${this.constructor.name}#${method}()`, ...args);
        };
    }
}
exports.SinusbotModule = SinusbotModule;
