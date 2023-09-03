const Express = require("express")()
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var thing = 1 // a thing for the clients to change

Socketio.on("connection", socket => {
  socket.emit("thing", thing)
})

Http.listen(3000, () => {
  console.log("Listening at :3000...")
})