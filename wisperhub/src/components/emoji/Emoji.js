import React, { useState } from "react";
import styles from "./Emoji-style.css";

export default function Emoji({ messageText, setMessageText }) {
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
  ];
  const [toogleEmoji, setToogleEmoji] = useState(false);

  const handleEmoji = () => {
    setToogleEmoji(!toogleEmoji);
  };

  function handleEmote(emote) {
    setMessageText(`${messageText}${emote}`);
  }

  return (
    <div>
      <button className="buttonEmoteMenu" type="button" onClick={handleEmoji}>
        🙂​
      </button>
      <div className={toogleEmoji === true ? "containerEmoji" : "none"}>
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
