import React, { useState } from "react";
import PropTypes from "prop-types";
import "./logging-style.css";

export default function Logging({ setUser }) {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText.length >= 3 && inputText.length < 28) {
      setUser(inputText);
    }
  };
  return (
    <div className="logging">
      <input
        className="loggingInput"
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="Indiquez votre pseudo"
      />
      <button className="joinButton" type="button" onClick={handleClick}>
        Rejoindre
      </button>
    </div>
  );
}

Logging.propTypes = {
  user: PropTypes.string.isRequired,
};
