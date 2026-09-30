import React, { useState } from 'react';
import './App.css'

function Game() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['Rock', 'Paper', 'Scissors'];

  const click = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    answer(choice, randomChoice);
  };

  const answer = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie");
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult("You Win");
    } else {
      setResult("You Lose");
    }
  };

  return (
    <div>
      <h2>Rock, Paper, Scissors Game</h2>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => click(choice)}>{choice}</button>
        ))}
      </div>
      {userChoice && (
        <div>
          <p>Your Choice: {userChoice}</p>
          <p>Computer Choice: {computerChoice}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

export default Game;