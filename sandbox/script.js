registerPlugin({}, () => {
  require("event").on("chat", ({ client }) => {
    client.chat("ping!")
  })
})