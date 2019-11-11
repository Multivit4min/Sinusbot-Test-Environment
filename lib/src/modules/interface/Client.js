"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("../Abstract");
class Client extends Abstract_1.SinusbotModule {
    constructor() {
        super(...arguments);
        /** output of client.isSelf() */
        this.self = false;
        /** function for client.chat() */
        this.chatMock = this.logFunctionCall("chat");
        /** uid of the user */
        this.uid = "NF61yPIiDvYuOJ/Bbeod84bw6dE=";
        /** name of the client */
        this.name = "FooBar";
    }
    buildModule() {
        const client = this;
        return {
            isSelf() {
                return client.self;
            },
            chat(message) {
                return client.chatMock(message);
            },
            uid() {
                return client.uid;
            },
            name() {
                return client.name;
            }
        };
    }
}
exports.Client = Client;
