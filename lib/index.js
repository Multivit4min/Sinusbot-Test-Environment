"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Sinusbot_1 = require("./Sinusbot");
const bot = new Sinusbot_1.Sinusbot();
if (!process.env.FILE)
    throw new Error("please specify an input file to run with the environment variable FILE");
fs_1.promises.readFile(process.env.FILE, "utf8")
    .then((script) => {
    bot.setConfig({ DEBUGLEVEL: 3, NOT_FOUND_MESSAGE: "0" });
    bot.setScript(script);
    const { createCommand } = bot.run();
    createCommand("test")
        .alias("test1", "test2")
        .exec((...args) => {
        console.log({ args });
        console.log("executed... with alias");
    });
    bot.event.chat({
        text: "!test1",
        client: Sinusbot_1.Sinusbot.createClient().buildModule(),
    });
});
