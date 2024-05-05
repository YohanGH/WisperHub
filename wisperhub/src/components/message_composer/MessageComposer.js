import React from "react";
import InputMessage from "./input_message/InputMessage.js";
import PropTypes from "prop-types";

export default function MessageComposer({ setSendMessage }) {
  return (
    <>
      <InputMessage setSendMessage={setSendMessage} />
    </>
  );
}

MessageComposer.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
