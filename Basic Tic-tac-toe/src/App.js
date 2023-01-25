import React, { useState } from 'react';

// helper for calculating a winner
import calculateWinner from './calculate-winner.js';

function Square ({ value, onSquareClick }) {
  return <button onClick={onSquareClick} className="square">{value}</button>
}

export default function Board() {
  const players = [
    {
      id: 0,
      symbol: 'X',
      name: 'Player 1'
    },
    {
      id: 1,
      symbol: 'O',
      name: 'Player 2'
    }
  ]

  const [squares, setSquares] = useState(Array(9).fill(null));
  // used to determine whose turn to play, player1 or player2
  const [currentPlayer, setCurrentPlayer] = useState(players[0])

  const winner = calculateWinner(squares, players)

  const handleSquareClick = i => {

    // do nothing if square is already filled with a symbol or someone won the game
    if (squares[i] || calculateWinner(squares, players)) {
      return;
    }

    // Create a copy of state
    const nextSquares = squares.slice();

    // update the clicked square's value to current player's symbol if the square is empty
    nextSquares[i] = currentPlayer.symbol;

    setSquares(nextSquares);

    // flip the currentUser
    currentPlayer.id == 0 ? setCurrentPlayer(players[1]) : setCurrentPlayer(players[0]);

  }

  return (
    <div>
      <div style={{marginBottom: '40px', padding:'20px', border: '1px solid', display: 'inline-block'}}>
        { `${ currentPlayer.id } | ${ currentPlayer.name } | ${ currentPlayer.symbol }` }
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
      {
        winner &&
        <div style={{marginTop: '40px', padding:'20px', border: '1px solid', display: 'inline-block'}}>
          { `${winner.name} won the game` }
        </div>
      }
    </div>
  );
}
