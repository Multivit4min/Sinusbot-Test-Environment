"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("./Abstract");
class Event extends Abstract_1.SinusbotModule {
    constructor() {
        super(...arguments);
        this.eventHandler = {};
    }
    /**
     * emits an event to the scripting engine
     * @param {string} backend the backend which should be retrieved
     */
    emit(event, data) {
        if (!Array.isArray(this.eventHandler[event]))
            return this;
        this.eventHandler[event].forEach(cb => cb(data));
        return this;
    }
    /**
     * emits a chat event to the sinusbot scripting engine
     * @param data the payload data for the event
     */
    chat(data) {
        this.emit("chat", {
            mode: Event.ChatTarget.PRIVATE,
            text: "",
            client: this.sinusbot.createClient().buildModule(),
            channel: this.sinusbot.createChannel().buildModule(),
            ...data
        });
    }
    /** registers a new event handler */
    addHandler(event, callback) {
        if (!Array.isArray(this.eventHandler[event]))
            this.eventHandler[event] = [];
        this.eventHandler[event].push(callback);
        return this;
    }
    buildModule() {
        const event = this;
        return {
            on(name, callback) {
                event.addHandler(name, callback);
            }
        };
    }
}
exports.Event = Event;
(function (Event) {
    let ChatTarget;
    (function (ChatTarget) {
        ChatTarget[ChatTarget["PRIVATE"] = 1] = "PRIVATE";
        ChatTarget[ChatTarget["CHANNEL"] = 2] = "CHANNEL";
        ChatTarget[ChatTarget["SERVER"] = 3] = "SERVER";
    })(ChatTarget = Event.ChatTarget || (Event.ChatTarget = {}));
})(Event = exports.Event || (exports.Event = {}));
