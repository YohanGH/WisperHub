import React from "react";
import InputMessage from "./input_message/InputMessage.js";
import PropTypes from "prop-types";
<<<<<<< HEAD

export default function MessageComposer({ setSendMessage }) {
  return (
    <>
      <InputMessage setSendMessage={setSendMessage} />
    </>
=======
import "./messageComposer-style.css";
export default function MessageComposer({ sendMessage, setSendMessage, user }) {
  return (
    <div id="messageComposer">
      <InputMessage
        user={user}
        setSendMessage={setSendMessage}
        sendMessage={sendMessage}
      />
    </div>
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
  );
}

MessageComposer.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
<<<<<<< HEAD
=======
  user: PropTypes.string.isRequired,
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
};
