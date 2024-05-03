import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);
