import React from "react";
import PropTypes from "prop-types";
import styles from "./conversation-style.css";
import Message from "../message/Message.js";

/**
 * Components Conversation affiche les messages heures et nom de l'utilisateur
 * @param {string} props.users - Nom de l'utilisateur
 * @param {Array} props.sendMessage - Message de l'utilisateur
 * */

export default function Conversation({ users, sendMessage }) {
  return (
    <div className="containerConversation">
<<<<<<< HEAD
      <div className="displayInformation">
        {/* <User />
        <Date /> */}
      </div>
=======
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
      <div className="displayMessage">
        {<Message sendMessage={sendMessage} />}
      </div>
    </div>
  );
}

Conversation.propTypes = {
  sendMessage: PropTypes.arrayOf(Object).isRequired,
};
