"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Engine {
    constructor() {
        this.backend = "ts3";
        this.commandprefix = "";
    }
    /**
     * @param backend the backend which should be retrieved
     */
    setBackend(backend) {
        this.backend = backend;
        return this;
    }
    /**
     * sets a new command prefix
     * @param prefix
     */
    setCommandPrefix(prefix) {
        this.commandprefix = prefix;
        return this;
    }
    /**
     * gets the module object
     */
    buildModule() {
        const engine = this;
        return {
            getBackend() {
                return engine.backend;
            },
            getCommandPrefix() {
                return engine.commandprefix;
            }
        };
    }
}
exports.default = Engine;
