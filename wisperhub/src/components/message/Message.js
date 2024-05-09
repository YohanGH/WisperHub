import React from "react";
import PropTypes from "prop-types";
import Dates from "../dates/Dates.js";

/**
 * Components pour afficher le message dans le rendu visuel
 * @param {Array} props.sendMessage - Le text à afficher.
 * */

export default function Message({ sendMessage }) {
  return (
    <>
      {sendMessage.map((messages) => (
        <div key={messages.id}>
          <section className="informationMessage">
            <span className="messageUser">
              <strong>{messages.user}</strong>
            </span>
            <span> ~ </span>
            <Dates />
          </section>
          <p className="messageText">{messages.message}</p>
        </div>
      ))}
    </>
  );
}

Message.propTypes = {
  sendMessage: PropTypes.arrayOf(Object).isRequired,
};
