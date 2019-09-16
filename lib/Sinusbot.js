"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vm = __importStar(require("vm"));
const registerPlugin = __importStar(require("./globals/registerPlugin"));
const sinusRequire = __importStar(require("./globals/require"));
const engine_1 = require("./modules/engine");
const event_1 = require("./modules/event");
const backend_1 = require("./modules/backend");
const format_1 = require("./modules/format");
const Client_1 = require("./modules/interface/Client");
const Channel_1 = require("./modules/interface/Channel");
class Sinusbot {
    constructor() {
        this.config = {};
        this.script = "";
        this.context = {};
        this.engine = new engine_1.Engine();
        this.backend = new backend_1.Backend();
        this.event = new event_1.Event();
        this.format = new format_1.Format();
    }
    static createClient() {
        const client = new Client_1.Client();
        return client;
    }
    static createChannel() {
        const channel = new Channel_1.Channel();
        return channel;
    }
    /**
     * sets the current config which will be given to the registerPlugin
     * @param config the config to pass to the registerPlugin function
     */
    setConfig(config = {}) {
        this.config = config;
        return this;
    }
    /**
     * sets the script which should get executed
     * @param script sets the current script to run
     */
    setScript(script) {
        this.script = script;
        return this;
    }
    /**
     * adds data to the context
     * @param context context data to add to the globals
     */
    addToContext(context) {
        this.context = {
            ...this.context,
            ...context
        };
        return this;
    }
    /**
     * retrieves the current context
     */
    getContext() {
        return this.context;
    }
    /**
     * Prepares the global variables for use
     */
    prepareContext() {
        const register = registerPlugin.configure(this.config);
        const req = sinusRequire.configure(this.getModules());
        this.addToContext({
            registerPlugin: register,
            require: req,
            module: { exports: null }
        });
    }
    /**
     * retrieve used modules
     */
    getModules() {
        return {
            event: this.event.buildModule(),
            backend: this.backend.buildModule(),
            engine: this.engine.buildModule(),
            format: this.format.buildModule()
        };
    }
    /**
     * runs the current script
     * @returns the exported values from the script
     */
    run() {
        this.prepareContext();
        const context = vm.createContext(this.context);
        vm.runInContext(this.script, context);
        return context.module.exports;
    }
}
exports.Sinusbot = Sinusbot;
