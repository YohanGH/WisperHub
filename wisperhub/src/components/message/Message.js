import React from "react";
import PropTypes from "prop-types";
import InputMessage from "../";
import styles from "./message-styles.module.css"

/** 
	* Components pour afficher le message dans le rendu visuel
	* @param {string} props.message - Le text à afficher.
	* */

export default function Message({ message }) {
	return (
		<>
			<Message className="message">{message}</Message>
		</>
	)
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
}
