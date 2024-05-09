import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Emoji from "../../emoji/Emoji.js";
import io from "socket.io-client";
import send from "../../../assets/images/send.png";

export default function InputMessage({ setSendMessage, sendMessage, user }) {
  const [messageText, setMessageText] = useState("");
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const socketRef = useRef(null);
  const textAreaRef = React.useRef(null);

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
      textAreaRef.current.textContent = "";
      event.preventDefault();
    }
  };

  const handleSend = () => {
    if (messageText !== "") {
      sendMessageLogic();
      textAreaRef.current.textContent = "";
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

  const handleOnChange = (event) => {
    if (textAreaRef.current) {
      setMessageText(textAreaRef.current.textContent);
      adjustTextAreaSize();
    }
  };

  const adjustTextAreaSize = () => {
    if (textAreaRef.current) {
      const { scrollWidth, clientWidth } = textAreaRef.current;

      if (scrollWidth > clientWidth) {
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      } else {
        textAreaRef.current.style.height = "auto";
      }
    }
  };
  return (
    <>
      <div
        ref={textAreaRef}
        className="messageInput"
        role="textbox"
        contentEditable="true"
        onInput={handleOnChange}
        onKeyDown={handleInputKeyDown}
      ></div>

      <button className="sendButton" type="button" onClick={handleSend}>
        <img src={send} alt="send" className="sendPic" />
      </button>

      <Emoji
        messageText={messageText}
        setMessageText={setMessageText}
        setToggleEmoji={setToggleEmoji}
        toggleEmoji={toggleEmoji}
        textAreaRef={textAreaRef}
      />
    </>
  );
}

InputMessage.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};
