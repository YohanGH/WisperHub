import "./App.css";
import { useState } from "react";
import MessageComposer from "./components/MessageComposer/MessageComposer";

function App() {
  const [sendMessage, setSendMessage] = useState(undefined);
  console.log(sendMessage);
  return (
    <>
      <MessageComposer setSendMessage={setSendMessage} />
    </>
  );
}

export default App;
