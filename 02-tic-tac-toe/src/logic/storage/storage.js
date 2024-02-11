export const saveGame = (newBoard, newTurn, newWinner) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('winner', JSON.stringify(newWinner))

  // turn is just a string (no need to JSON.stringify())
  window.localStorage.setItem('turn', newTurn)
}

export const resetSavedProgress = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
}
