import express from "express";
import * as path from "path";
import cors from "cors";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    try {
      socket.broadcast.emit("chat message", msg);
      console.log("Received message: " + msg);
    } catch (error) {
      console.error("Error handling chat message: ", error);
      socket.emit("error", { message: "Error processing your message." });
    }
  });

  socket.on("error", (error) => {
    console.error("Error received from server:", error);
  });
});

server.listen(8080, () => {
  console.log("App running on http://localhost:8080");
});
