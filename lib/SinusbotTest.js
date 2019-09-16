"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vm = __importStar(require("vm"));
const registerPlugin = __importStar(require("./globals/registerPlugin"));
const sinusRequire = __importStar(require("./globals/require"));
const engine_1 = __importDefault(require("./modules/engine"));
const event_1 = __importDefault(require("./modules/event"));
const backend_1 = __importDefault(require("./modules/backend"));
class SinusbotTest {
    constructor() {
        this.config = {};
        this.script = "";
        this.context = {};
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
    prepareGlobals() {
        const register = registerPlugin.configure(this.config);
        const req = sinusRequire.configure(this.getModules());
        this.addToContext({
            registerPlugin: register,
            require: req
        });
    }
    /**
     * retrieve used modules
     */
    getModules() {
        return {
            engine: this.prepareEngine(),
            event: this.prepareEvent(),
            backend: this.prepareBackend()
        };
    }
    /** builds the engine module */
    prepareEngine() {
        const engine = new engine_1.default();
        return engine.buildModule();
    }
    /** builds the event module */
    prepareEvent() {
        const event = new event_1.default();
        return event.buildModule();
    }
    /** builds the backend module */
    prepareBackend() {
        const backend = new backend_1.default();
        return backend.buildModule();
    }
    /**
     * runs the current script
     */
    run() {
        this.prepareGlobals();
        const context = vm.createContext(this.context);
        vm.runInContext(this.script, context);
    }
}
exports.SinusbotTest = SinusbotTest;
