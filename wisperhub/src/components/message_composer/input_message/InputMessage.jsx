import { useState } from "react";
import PropTypes from "prop-types";

export default InputMessage;
function InputMessage({ setSendMessage }) {
  const [messageText, setMessageText] = useState("");

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setSendMessage(event.target.value);
      setMessageText("");
    }
  };
  const handleSend = () => {
    setSendMessage(messageText);
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
    </>
  );
}

InputMessage.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
