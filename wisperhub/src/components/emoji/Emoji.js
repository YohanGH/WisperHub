import React, { useState } from "react";
import styles from "./Emoji-style.css";
import PropTypes from "prop-types";

export default function Emoji({
  messageText,
  setMessageText,
<<<<<<< HEAD
  toogleEmoji,
  setToogleEmoji,
}) {

=======
  toggleEmoji,
  setToggleEmoji,
}) {
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
  const emoji = [
    "🙂​",
    "😂",
    "😝",
    "😁",
    "😱",
    "👉",
    "🙌",
    "🍻",
    "🔥",
    "🌈",
    "☀",
    "🎈",
    "🌹",
    "💄",
    "🎀",
    "⚽",
    "🎾",
    "🏁",
    "😡",
    "👿",
    "🐻",
    "🐶",
    "🐬",
    "🐟",
    "🍀",
    "👀",
    "🚗",
    "🍎",
    "💝",
    "💙",
    "👌",
    "❤",
    "😍",
    "😉",
    "😓",
    "😳",
    "💪",
    "💩",
    "🍸",
    "🔑",
    "💖",
    "🌟",
    "🎉",
    "🌺",
    "🎶",
    "👠",
    "🏈",
    "⚾",
    "🏆",
    "👽",
    "💀",
    "🐵",
    "🐮",
    "🐩",
    "🐎",
    "💣",
    "👃",
    "👂",
    "🍓",
    "💘",
    "💜",
    "👊",
    "💋",
    "😘",
    "😜",
    "😵",
    "🙏",
    "👋",
    "🚽",
    "💃",
    "💎",
    "🚀",
    "🌙",
    "🎁",
    "⛄",
    "🌊",
    "⛵",
    "🏀",
    "🎱",
    "💰",
    "👶",
    "👸",
    "🐰",
    "🐷",
    "🐍",
    "🐫",
    "🔫",
    "👄",
    "🚲",
    "🍉",
    "💛",
    "💚",
    "🖕",
    "🍪",
    "🍕",
    "💻",
  ];

  const handleEmoji = () => {
<<<<<<< HEAD
    setToogleEmoji(!toogleEmoji);
=======
    setToggleEmoji(!toggleEmoji);
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
  };

  function handleEmote(emote) {
    setMessageText(`${messageText}${emote}`);
  }

  return (
<<<<<<< HEAD
    <div>
      <button className="buttonEmoteMenu" type="button" onClick={handleEmoji}>
        🙂​
      </button>
      <div className={toogleEmoji === true ? "containerEmoji" : "none"}>
=======
    <div className="emoteButtonContainer">
      <button className="buttonEmoteMenu" type="button" onClick={handleEmoji}>
        🙂​
      </button>
      <div className={toggleEmoji === true ? "containerEmoji" : "none"}>
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
        {emoji.map((emote) => (
          <button
            className="emote"
            type="button"
            onClick={() => handleEmote(emote)}
            key={emote}
          >
            {emote}
          </button>
        ))}
      </div>
    </div>
  );
}

Emoji.propTypes = {
  setMessageText: PropTypes.func.isRequired,
<<<<<<< HEAD
  setToogleEmoji: PropTypes.func.isRequired,
  toogleEmoji: PropTypes.bool.isRequired,
  messageText: PropTypes.string.isRequired,
};

=======
  setToggleEmoji: PropTypes.func.isRequired,
  toggleEmoji: PropTypes.bool.isRequired,
  messageText: PropTypes.string.isRequired,
};
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
