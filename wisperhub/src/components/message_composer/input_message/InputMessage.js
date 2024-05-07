import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Emoji from "../../emoji/Emoji.js";
import io from "socket.io-client";

export default function InputMessage({ setSendMessage, sendMessage, user }) {
  const [messageText, setMessageText] = useState("");
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:8080");

    socketRef.current.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    socketRef.current.on("chat message", (msg) => {
      setSendMessage((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && messageText !== "") {
      sendMessageLogic();
    }
  };

  const handleSend = () => {
    if (messageText !== "") {
      sendMessageLogic();
    }
  };

  const sendMessageLogic = () => {
    setSendMessage((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length,
        user: user,
        message: messageText,
      },
    ]);

    socketRef.current.emit("chat message", {
      id: sendMessage.length,
      user: user,
      message: messageText,
    });
    setMessageText("");
    setToggleEmoji(false);
  };

  return (
    <>
      <input
        className="messageInput"
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
      <button className="sendButton" type="button" onClick={handleSend}>
        Send
      </button>

      <Emoji
        messageText={messageText}
        setMessageText={setMessageText}
        setToggleEmoji={setToggleEmoji}
        toggleEmoji={toggleEmoji}
      />
    </>
  );
}

InputMessage.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};
