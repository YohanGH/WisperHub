import React from "react";
import { useState } from "react";
import Conversation from "./conversation/conversation.js";
import MessageComposer from "./message_composer/MessageComposer.js";
import Logging from "./logging/Logging.js";

export default function MainApp() {
  const [sendMessage, setSendMessage] = useState([]);
  const [user, setUser] = useState("");

  return (
    <>
      {user.length < 3 ? (
        <Logging setUser={setUser} />
      ) : (
        <div id="chat">
          <Conversation sendMessage={sendMessage} />
          <MessageComposer
            setSendMessage={setSendMessage}
            sendMessage={sendMessage}
            user={user}
          />
        </div>
      )}
    </>
  );
}
