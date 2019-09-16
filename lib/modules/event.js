"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor() {
        this.eventHandler = {};
    }
    /**
     * @param {string} backend the backend which should be retrieved
     */
    emit(event, data) {
        if (!Array.isArray(this.eventHandler[event]))
            return this;
        this.eventHandler[event].forEach(cb => cb(data));
        return this;
    }
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
exports.default = Event;
