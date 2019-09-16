"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const SinusbotTest_1 = require("./SinusbotTest");
const testenv = new SinusbotTest_1.SinusbotTest();
if (!process.env.FILE)
    throw new Error("please specify an input file to run with the environment variable FILE");
fs_1.promises.readFile(process.env.FILE, "utf8")
    .then((script) => {
    testenv.setScript(script);
    testenv.run();
});
