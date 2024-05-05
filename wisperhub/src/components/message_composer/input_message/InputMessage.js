import React, { useState } from "react";
import PropTypes from "prop-types";
import Emoji from "../../emoji/Emoji.js";

export default function InputMessage({ setSendMessage }) {
  const [messageText, setMessageText] = useState("");
  const user = "liladoc";

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setSendMessage((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length,
          user: user,
          message: messageText,
        },
      ]);
      setMessageText("");
    }
  };

  const handleSend = () => {
    setSendMessage((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length,
        user: user,
        message: messageText,
      },
    ]);
    setMessageText("");
  };

  return (
    <>
      <input
        type="text"
        value={messageText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <button type="button" onClick={handleSend}>
        send
      </button>
      <Emoji messageText={messageText} setMessageText={setMessageText} />
    </>
  );
}

InputMessage.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
