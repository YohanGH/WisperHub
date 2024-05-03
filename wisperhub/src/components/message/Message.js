import React from "react";
import PropTypes from "prop-types";

/**
 * Components pour afficher le message dans le rendu visuel
 * @param {string} props.sendMessage - Le text à afficher.
 * */

export default function Message({ sendMessage }) {
  return (
    <>
      {sendMessage.map((messages) => (
        <div key={messages.id}>
          {messages.user}: {messages.message}
        </div>
      ))}
    </>
  );
}

Message.propTypes = {
  sendMessage: PropTypes.arrayOf(Object).isRequired,
};
