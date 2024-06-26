import React, { useState } from "react";
import styles from "./Emoji-style.css";
import PropTypes from "prop-types";

export default function Emoji({
  messageText,
  setMessageText,
  toggleEmoji,
  setToggleEmoji,
  textAreaRef,
}) {
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
    setToggleEmoji(!toggleEmoji);
  };

  function handleEmote(emote) {
    textAreaRef.current.textContent += emote;
    setMessageText(`${messageText}${emote}`);
  }

  return (
    <div className="emoteButtonContainer">
      <button className="buttonEmoteMenu" type="button" onClick={handleEmoji}>
        🙂​
      </button>
      <div className={toggleEmoji === true ? "containerEmoji" : "none"}>
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
  setToggleEmoji: PropTypes.func.isRequired,
  toggleEmoji: PropTypes.bool.isRequired,
  messageText: PropTypes.string.isRequired,
};
