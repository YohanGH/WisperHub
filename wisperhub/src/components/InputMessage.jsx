import { useState } from "react";

function InputMessage() {
  const [messageText, setMessageText] = useState("");
  const [sendMessage, setSendMessage] = useState(undefined);

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setSendMessage(event.target.value);
      setMessageText("");
      console.log(event.target.value);
    }
  };
  const handleSend = () => {
    setSendMessage(messageText);
    setMessageText("");
    console.log(messageText);
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

export default InputMessage;
