import React, { useState } from "react";
import dice1 from '../Images/dice1.png';
import dice2 from '../Images/dice2.png';
import dice3 from '../Images/dice3.png';
import dice4 from '../Images/dice4.png';
import dice5 from '../Images/dice5.png';
import dice6 from '../Images/dice6.png';
import diceImage from '../Images/die.png';
import './GamePage.css';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function GamePage() {
  const [img, setImg] = useState(diceImage);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const rollDice = () => {

    if (selected === null) {
      alert("Please choose a number first!");
      return;
    }
    else{
    const index = Math.floor(Math.random() * 6);
    setImg(diceImages[index]);

    if (selected === index + 1) {
      setScore(prev => prev + (index + 1));
    } else {
      setScore(prev => prev - (index + 1));
    }
    }
  };

  return (
    <div className="game-container">
      
      <div className="score">
        <h1>Score: {score}</h1>
      </div>

      <div className="choose-box">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <button
            key={num}
            className={`box ${selected === num ? "selected" : ""}`}
            onClick={() => setSelected(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="dice-image">
        <img src={img} alt="dice" />
      </div>

      <button className="roll-btn" onClick={rollDice}>
        Roll Dice
      </button>

      <button className="reset-btn" onClick={() => setScore(0)}>
        Reset
      </button>

    </div>
  );
}

export default GamePage;
