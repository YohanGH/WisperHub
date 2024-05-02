import "./App.css";
import { useState } from "react";
import MessageComposer from "./components/MessageComposer/MessageComposer";

import Conversation from "./conponents/conversation/Conversation"

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
