import React, { useState } from 'react';

// helper for calculating a winner
import calculateWinner from './calculate-winner.js';

function Square ({ value, onSquareClick }) {
  return <button onClick={onSquareClick} className="square">{value}</button>
}

function Board({squares, onMove, currentPlayer}) {

  const handleSquareClick = i => {
    // do nothing if square is already filled with a symbol
    if (squares[i]) {
      return;
    }
    // Create a copy of state
    const nextSquares = squares.slice();

    // update the clicked square's value to current player's symbol if the square is empty
    nextSquares[i] = currentPlayer.symbol;

    onMove(nextSquares)
    // setSquares(nextSquares);

    // flip the currentUser
    // currentPlayer.id == 0 ? setCurrentPlayer(players[1]) : setCurrentPlayer(players[0]);

  }

  return (
    <div>
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
    </div>
  );
}

export default function Game() {
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
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // used to determine whose turn to play, player1 or player2
  const [currentPlayer, setCurrentPlayer] = useState(players[0])
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares, players)
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    nextMove % 2 === 0 ? setCurrentPlayer(players[0]) : setCurrentPlayer(players[1])
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handleMove(nextSquares){
    // do nothing if someone won the game
    if (calculateWinner(currentSquares, players)) {
      return;
    }

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // flip the currentUser
    currentPlayer.id === 0 ? setCurrentPlayer(players[1]) : setCurrentPlayer(players[0]);
  }

  return (
    <div className='container'>
      <div className="game">
        <div className='row'>
          <div>
            <Board squares={currentSquares} onMove={handleMove} currentPlayer={currentPlayer} />
          </div>
          <div>
            <ol className='history'>{moves}</ol>
          </div>
        </div>
          <div className='gameStatus'>
            {
              winner ?
              `${winner.name} won the game 🔥👏🏻`
              :
              `${ currentPlayer.name } | ${ currentPlayer.symbol }`
            }
          </div>
      </div>
    </div>
  );
}
