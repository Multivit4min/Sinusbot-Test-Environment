"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configure(config = {}, meta = {}) {
    return function registerPlugin(header = {}, handler) {
        handler(null, config, meta);
    };
}
exports.configure = configure;
