import React from "react";

// function Card() {
//   return <h1>Test</h1>;
// }

const Card = (props) => {
  return (
    <div className="cardWrapper">
      <dl>
        <dt>
          <span className="cardEmoji">{props.emoji}</span>
          <h2 className="cardName">{props.name}</h2>
        </dt>
        <dd className="emojiMeaning">{props.meaning}</dd>
      </dl>
    </div>
  );
};

export default Card;
