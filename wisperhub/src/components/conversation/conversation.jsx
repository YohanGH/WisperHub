import styles from "./conversation-style.module.css";

/**
 * Components Conversation affiche les messages heures et nom de l'utilisateur
 * @param {string} props.users - Nom de l'utilisateur
 * @param {string} props.messages - Message de l'utilisateur
 * */

export default function Conversation({ users, messages }) {
	return (
		<div className={styles.container-conversation}>
			<div className={styles.display-information}>
				<User />
				<Date />
			</div>
			<div className={styles.display-message}>
				<Message />
			</div>
		</div>
	);
}
