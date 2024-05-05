import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(8080, () => {
  console.log("App running on http://localhost:8080");
});
