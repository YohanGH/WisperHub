import styles from "./conversation-style.module.css";

/**
 * Components Conversation affiche les messages heures et nom de l'utilisateur
 * @param {string} props.users - Nom de l'utilisateur
 * @param {string} props.messages - Message de l'utilisateur
 * */

export default function Conversation({ users, messages }) {
  return (
    <div className={styles.containerConversation}>
      <div className={styles.displayInformation}>
        {/* <User />
        <Date /> */}
      </div>
      <div className={styles.displayMessage}>{/* <Message /> */}</div>
    </div>
  );
}
