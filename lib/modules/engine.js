"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Engine extends Abstract_1.SinusbotModule {
    constructor() {
        super(...arguments);
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
            },
            log(...data) {
                return console.log("Engine#log()", ...data);
            }
        };
    }
}
exports.Engine = Engine;
