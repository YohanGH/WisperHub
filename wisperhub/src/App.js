import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import LoadingPage from "./components/loading_page/LoadingPage.js"
import MainApp from "./components/MainApp.js";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5555);
    return () => clearTimeout(timer)
  }, []);

  return (
    <>
    {isLoading ? (
      <LoadingPage />
    ) : (
      <MainApp />
    )}
  </>
  );
}

export default App;
