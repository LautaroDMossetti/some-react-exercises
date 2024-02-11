import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner, checkDraw } from './logic/board'
import WinnerFrame from './components/WinnerFrame'
import TurnIndicator from './components/TurnIndicator'
import Board from './components/Board'
import { saveGame, resetSavedProgress } from './logic/storage/storage'

// yes this is a thing and it works
// const arrayA = [1, 2, 3]
// const [a, b, c] = arrayA
// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // 3

function App () {
  // initialize the states by checking if there is saved progress
  // else just use default values to start a new game
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    // turn is just a string (no need to JSON.parse())
    return savedTurn ?? TURNS.X
  })

  // null means no one has won yet, false means draw
  const [winner, setWinner] = useState(() => {
    const savedWinner = window.localStorage.getItem('winner')
    return savedWinner ? JSON.parse(savedWinner) : null
  })

  const updateBoard = (index) => {
    // check if the current square is already marked
    // or if there's winner already
    if (board[index] || winner) return

    // record the new mark and update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // check who had the last turn and change it
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // check if there's a winner, else check if there are no moves left
    let newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti({
        particleCount: 500,
        gravity: 0.5,
        spread: 180,
        ticks: 800,
        decay: 0.93,
        origin: {
          y: 1.2
        }
      })
      setWinner(newWinner)
    } else if (checkDraw(newBoard)) {
      // false means draw
      newWinner = false
      setWinner(newWinner) // draw
    }

    // save game progress
    saveGame(newBoard, newTurn, newWinner)
  }

  const resetGame = () => {
    // re-initialize the states to their default values
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // delete saved progress from current game
    resetSavedProgress()
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>

      <Board board={board} updateBoard={updateBoard}/>

      <TurnIndicator turn={turn}/>

      <WinnerFrame winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
