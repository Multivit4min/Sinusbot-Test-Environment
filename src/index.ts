import { promises as fs } from "fs"
import { Sinusbot } from "./Sinusbot"

const bot = new Sinusbot()

if (!process.env.FILE)
  throw new Error("please specify an input file to run with the environment variable FILE")

fs.readFile(process.env.FILE, "utf8")
  .then((script: string) => {
    bot.setConfig({ DEBUGLEVEL: 3, NOT_FOUND_MESSAGE: "0" })
    bot.setScript(script)
    bot.run()
  })
