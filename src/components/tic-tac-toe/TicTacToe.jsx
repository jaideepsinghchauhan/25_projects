import React, { useState } from "react";
import "./styles.css";
const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winningCells, setWinningCells] = useState([]);

  const winningMap = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function handleClick(index) {
    // check if already filled
    if (board[index] || winner) return;

    // set the value in the board
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // check if user wins
    const won = checkWinner(newBoard);
    if (!won) {
      if (!newBoard.includes("")) {
        setWinner("DRAW");
        return;
      }
    }
    // change the user
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    // check if all chances are exhausted
  }

  function checkWinner(updatedBoard) {
    // Check if the board has 3 same values for current user
    for (let i = 0; i < winningMap.length; i++) {
      let [x, y, z] = winningMap[i];
      if (
        updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[x] === updatedBoard[z]
      ) {
        setWinner(currentPlayer);
        setWinningCells([x, y, z]);
        return true;
      }
    }
  }

  function handleReset() {
    setBoard(Array(9).fill(""));
    setWinner(null);
  }
  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <div>
        {winner ? (
          <>
            {winner === "DRAW" ? (
              <h3> It's a Draw</h3>
            ) : (
              <h3>Player Won {winner}</h3>
            )}

            <button onClick={handleReset}>Restart Game</button>
          </>
        ) : (
          <h3>Current Player : {currentPlayer}</h3>
        )}
      </div>

      <div className="grid-container">
        {board.map((_, index) => {
          const isWinningCell = winningCells.includes(index);
          return (
            <div
              className={`item ${isWinningCell ? "highlight" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {board[index]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
