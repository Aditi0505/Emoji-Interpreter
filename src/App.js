import { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "♉": "Taurus",
  "♈": "Aries",
  "♋": "Cancer",
  "♌": "Leo",
  "♓": "Pisces",
  "♐": "Sagittarius",
  "♏": "Scorpio",
  "♒": "Aquarius",
  "♍": "Virgo",
  "♊": "Gemini",
  "♑": "Capricorn",
  "♎": "libra"
};

const emojiKeys = Object.keys(emojiDictonary);
export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Your meaning will appear here!"
  );

  function onChangeHandler(event) {
    var meaning = emojiDictonary[event.target.value];
    if (meaning === undefined) {
      meaning = "not present in our database!";
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
      <input
        onChange={onChangeHandler}
        placeholder="Enter the symbol"
        style={{ width: "80vw", height: "5vh" }}
      />
      <div style={{ margin: "0.8rem", padding: "1rem", fontWeight: "bolder" }}>
        {emojiMeaning}
      </div>
      <div style={{ fontSize: "2rem" }}>
        {emojiKeys.map((emoji) => (
          <span
            key={emoji}
            onClick={() => onClickHandler(emoji)}
            style={{ cursor: "pointer", padding: "1rem" }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
