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

const rules = {
  1: "Select a number from 1 to 6.",
  2: "Click the Roll Dice button.",
  3: "If your selected number equals the dice result, you gain points equal to that number.",
  4: "If it does not match, you lose the same amount.",
  5: "Reset button sets score back to 0."
};

function GamePage() {
  const [img, setImg] = useState(diceImage);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [ruleSelected, setRuleSelected] = useState(false);

  const handleModeToggle = () => {
  setRuleSelected(prev => !prev);
};

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

      <div className="choices-row">
        <div className="choice-box">
          <h3>Your Choice</h3>
          <img
            src={selected === null ? diceImage : diceImages[selected - 1]}
            alt="your choice"
          />
        </div>

        <div className="choice-box">
          <h3>Computer Choice</h3>
          <img src={img} alt="dice result" />
        </div>
      </div>

      <button className="roll-btn" onClick={rollDice}>
        Roll Dice
      </button>

      <button className="reset-btn" onClick={() => setScore(0)}>
        Reset
      </button>
      <button className="reset-btn" onClick={handleModeToggle}>Rules</button>
      {ruleSelected && (
        <div className="rules-box">
          <h2>Game Rules</h2>
          <ul>
            {Object.values(rules).map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default GamePage;
