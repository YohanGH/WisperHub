import React from "react";
import "./App.css";
import { useState } from "react";
import MessageComposer from "./components/message_composer/MessageComposer.js";
import Conversation from "./components/conversation/conversation.js";

function App() {
  const [sendMessage, setSendMessage] = useState(undefined);
  console.log(sendMessage);
  return (
    <>
      <Conversation />
      <MessageComposer setSendMessage={setSendMessage} />
    </>
  );
}

export default App;
