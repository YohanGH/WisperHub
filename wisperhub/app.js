import express from "express";
import * as path from "path";
import cors from "cors";
<<<<<<< HEAD

const app = express();
=======
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
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(new URL(".", import.meta.url).pathname, "index.html"));
});

app.listen(() => {
  console.log("TouTaFait");
=======
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
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
});
