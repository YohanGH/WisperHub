import React from "react";
import InputMessage from "./input_message/InputMessage.js";
import PropTypes from "prop-types";
import "./messageComposer-style.css";
export default function MessageComposer({ sendMessage, setSendMessage }) {
  return (
    <div id="messageComposer">
      <InputMessage setSendMessage={setSendMessage} sendMessage={sendMessage} />
    </div>
  );
}

MessageComposer.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
