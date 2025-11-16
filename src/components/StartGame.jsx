import React from "react";
import die from "../Images/die.png";
import "./StartGame.css";
import { Link } from "react-router-dom";

const StartGame = () => {
  return (
    <>
      <div className="right">
        <img src={die} alt="dice image" />
      </div>

      <div className="left">
        <h1>Dice Game</h1>

        <Link to="/game">
          <button>Start Game</button>
        </Link>
      </div>
    </>
  );
};

export default StartGame;
