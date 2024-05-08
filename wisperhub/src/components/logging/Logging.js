import React, { useState } from "react";
import PropTypes from "prop-types";
import "./logging-style.css";
import logo from "../../assets/images/logo.png";

export default function Logging({ setUser }) {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText.length >= 3 && inputText.length < 20) {
      setUser(inputText);
    }
  };
  return (
    <div className="logging">
      <img src={logo} className="wisperLogo" alt="wisperhub logo" />
      <input
        className="loggingInput"
        type="text"
        value={inputText}
        onChange={(event) => {
          if (event.target.value.length < 20) {
            setInputText(event.target.value);
          }
        }}
        placeholder="Indiquez votre pseudo"
      />
      <button className="joinButton" type="button" onClick={handleClick}>
        Rejoindre
      </button>
    </div>
  );
}

Logging.propTypes = {
  setUser: PropTypes.func.isRequired,
};
