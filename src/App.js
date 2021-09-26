import { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♌": "Leo",
  "♓": "Pisces"
};

const emojiKeys = Object.keys(emojiDictonary);
export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function onChangeHandler(event) {
    var meaning = emojiDictonary[event.target.value];
    if (meaning === undefined) {
      meaning = "This is not present in our database!";
    }
    setEmojiMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Zodiac Emoji...</h1>
      <input onChange={onChangeHandler} />
      <div style={{ margin: "0.8rem" }}>{emojiMeaning}</div>
      <div style={{ fontSize: "2rem" }}>
        {emojiKeys.map((emoji) => (
          <span key={emoji} onClick={() => onClickHandler(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
