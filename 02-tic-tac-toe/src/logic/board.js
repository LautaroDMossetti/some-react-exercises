import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
  // check all winner combinations to see if X or O has won
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  // return null if no winner yet
  return null
}

export const checkDraw = (boardToCheck) => {
  // check if there are any spaces with null
  // null = usable space to keep playing
  if (!boardToCheck.includes(null)) {
    // if no nulls left, then the draw is true
    return true
  } else {
    return false
  }
}
