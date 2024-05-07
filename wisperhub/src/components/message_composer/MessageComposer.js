import React from "react";
import InputMessage from "./input_message/InputMessage.js";
import PropTypes from "prop-types";
import "./messageComposer-style.css";
export default function MessageComposer({ setSendMessage }) {
  return (
    <div id="messageComposer">
      <InputMessage setSendMessage={setSendMessage} />
    </div>
  );
}

MessageComposer.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
