import React, { useState } from "react";
import PropTypes from "prop-types";
import Emoji from "../../emoji/Emoji.js";

export default function InputMessage({ setSendMessage }) {
  const [messageText, setMessageText] = useState("");
  const [toogleEmoji, setToogleEmoji] = useState(false);
  const user = "liladoc";

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && messageText !== "") {
      setSendMessage((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length,
          user: user,
          message: messageText,
        },
      ]);
      setMessageText("");
      setToogleEmoji(false);
    }
  };

  const handleSend = () => {
    if (messageText !== "") {
      setSendMessage((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length,
          user: user,
          message: messageText,
        },
      ]);
      setMessageText("");
      setToogleEmoji(false);
    }
  };

  return (
    <>
      <input
        className="messageInput"
        type="text"
        value={messageText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <button type="button" onClick={handleSend}>
        send
      </button>

      <Emoji
        messageText={messageText}
        setMessageText={setMessageText}
        setToogleEmoji={setToogleEmoji}
        toogleEmoji={toogleEmoji}
      />
    </>
  );
}

InputMessage.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
