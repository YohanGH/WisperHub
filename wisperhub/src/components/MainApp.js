import React from "react";
import { useState } from "react";
import Conversation from "./conversation/conversation.js";
import MessageComposer from "./message_composer/MessageComposer.js";

export default function MainApp() {
  const [sendMessage, setSendMessage] = useState(undefined);
  return (
    <div>
      <Conversation />
      <MessageComposer setSendMessage={setSendMessage} />
    </div>
  );
}