import React, { useState } from "react";
import PropTypes from "prop-types";
import "./logging-style.css";
import logo from "../../assets/images/logo.png";

export default function Logging({ setUser, user }) {
  const [inputText, setInputText] = useState("");
  const [joinClick, setjoinClick] = useState(false);

  const handleClick = () => {
    if (inputText.length >= 3 && inputText.length < 20) {
      setUser(inputText);
    }
    setjoinClick(true);
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
      <div className="buttonContainer">
        <button className="joinButton" type="button" onClick={handleClick}>
          Rejoindre
        </button>
        <p
          className={
            joinClick === true && user.length <= 3 ? "tooShort" : "none"
          }
        >
          <small>Pseudo trop court 4 caractères minimum</small>
        </p>
      </div>
    </div>
  );
}

Logging.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
