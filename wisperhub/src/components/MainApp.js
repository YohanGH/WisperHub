import React from "react";
import { useState } from "react";
import Conversation from "./conversation/conversation.js";
import MessageComposer from "./message_composer/MessageComposer.js";

export default function MainApp() {
  const [sendMessage, setSendMessage] = useState([]);

  return (
    <div id="chat">
      <Conversation sendMessage={sendMessage} />
      <MessageComposer
        setSendMessage={setSendMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}
