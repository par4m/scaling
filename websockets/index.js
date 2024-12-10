const express = require("express");

const path = require("path");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

// pass server to Socket io
const io = new Server(server);

// Socket COnnec
// sockets -> clients
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public/")));

server.listen(5001, () => console.log(`Server Started at Port 5000`));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});
