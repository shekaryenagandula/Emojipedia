import "./styles.css";
import Card from "./components/Card";
import data from "./data.js";

function Entry(emojidata) {
  return (
    <Card
      key={emojidata.id}
      name={emojidata.name}
      emoji={emojidata.emoji}
      meaning={emojidata.meaning}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <div className="container">{data.map(Entry)}</div>
    </div>
  );
}
