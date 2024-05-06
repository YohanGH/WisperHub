import express from "express";
import * as path from "path";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(new URL(".", import.meta.url).pathname, "index.html"));
});

app.listen(() => {
  console.log("TouTaFait");
});
