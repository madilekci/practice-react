const calculateWinner = (squares, players) => {

    // list of all combinations that a user can win the game with
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // check if there is any line that is filled with same symbol
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // find which player won the game
            return (squares[a] == players[0].symbol) ? players[0] : players[1]
        }
    }
    return null;
}

export default calculateWinner;