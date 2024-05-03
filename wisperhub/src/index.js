import React from "react";
import ReactDOM from "react-dom";
// import Home from "./pages/Home.js";
import App from "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
