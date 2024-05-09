import React from "react";
import { useState } from "react";
import Conversation from "./conversation/conversation.js";
import MessageComposer from "./message_composer/MessageComposer.js";
import Logging from "./logging/Logging.js";
import CGU from "./cgu/CGU.js";

export default function MainApp() {
  const [sendMessage, setSendMessage] = useState([]);
  const [user, setUser] = useState("");
  const [cguAccepted, setCguAccepted] = useState(false);

  return (
    <>
      {user.length > 3 && cguAccepted ? (
        <div id="chat">
          <Conversation sendMessage={sendMessage} />
          <MessageComposer
            setSendMessage={setSendMessage}
            sendMessage={sendMessage}
            user={user}
          />
        </div>
      ) : (
        <div>
          <Logging setUser={setUser} />
          <CGU setCguAccepted={setCguAccepted} />
        </div>
      )}
    </>
  );
}
