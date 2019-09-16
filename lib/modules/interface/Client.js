"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("../Abstract");
class Client extends Abstract_1.SinusbotModule {
    constructor() {
        super(...arguments);
        this.self = false;
    }
    buildModule() {
        const client = this;
        return {
            isSelf() {
                return client.self;
            },
            chat(message) {
                console.log("client#chat()", message);
            }
        };
    }
}
exports.Client = Client;
