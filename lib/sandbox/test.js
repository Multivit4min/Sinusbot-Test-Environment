"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sinusbot_1 = require("../src/Sinusbot");
const fs = __importStar(require("fs"));
const sinusbot = new Sinusbot_1.Sinusbot();
sinusbot.setScript(fs.readFileSync("./sandbox/script.js", "utf8"));
sinusbot.run();
sinusbot.event.chat({});
