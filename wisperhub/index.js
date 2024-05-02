import express from "express";
import { createServer } from "node:http";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'dist' directory
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const server = createServer(app);
server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
