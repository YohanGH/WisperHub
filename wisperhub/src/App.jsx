import "./App.css";
import { useState } from "react";
import MessageComposer from "./components/message_composer/MessageComposer";
import LoadingPage from "./components/loading-page/LoadingPage"
import Conversation from "./components/conversation/conversation";

function App() {
  const [sendMessage, setSendMessage] = useState(undefined);
  console.log(sendMessage);
  return (
    <>
	  <LoadingPage />
      <Conversation />
      <MessageComposer setSendMessage={setSendMessage} />
    </>
  );
}

export default App;
