"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * configures the global module context and sets the allowed modules
 * @param modules
 * @param throwNotFound throw an error if a module has not been found
 */
function configure(modules, throwNotFound = true) {
    return function require(mod) {
        const exists = Object.keys(modules).includes(mod);
        if (!exists && throwNotFound)
            throw new Error(`Module with name '${mod}' has not been found`);
        return modules[mod];
    };
}
exports.configure = configure;
