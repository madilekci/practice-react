import React, { useState } from 'react';

function Square () {
  const handleSquareClick = () => {
    console.log(`Square ${value} is clicked`)
    setValue('X');
  }
  const [value, setValue] = useState(null);
  return <button onClick={handleSquareClick} className="square">{value}</button>
}

export default function Board() {

  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
