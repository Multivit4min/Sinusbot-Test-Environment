import { Sinusbot } from "../src/Sinusbot"
import * as fs from "fs"

const sinusbot = new Sinusbot()
sinusbot.setScript(fs.readFileSync("./sandbox/script.js", "utf8"))

sinusbot.run()
sinusbot.event.chat({})