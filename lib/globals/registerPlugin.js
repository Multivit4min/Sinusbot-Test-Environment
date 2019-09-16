"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configure(config = {}) {
    return function registerPlugin(meta, handler) {
        handler(null, config, meta);
    };
}
exports.configure = configure;
