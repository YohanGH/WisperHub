import React from "react";
import styles from "./conversation-style.css";

/**
 * Components Conversation affiche les messages heures et nom de l'utilisateur
 * @param {string} props.users - Nom de l'utilisateur
 * @param {string} props.messages - Message de l'utilisateur
 * */

export default function Conversation({ users, messages }) {
  return (
    <div className="containerConversation">
      <div className="displayInformation">
        {/* <User />
        <Date /> */}
      </div>
      <div className="displayMessage">{/* <Message /> */}</div>
    </div>
  );
}
