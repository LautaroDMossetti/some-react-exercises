import Square from './Square'

const Board = ({ board, updateBoard }) => {
  const boardMap = board.map((mark, index) => {
    return (
      <Square
      key={index}
      index={index}
      updateBoard={updateBoard}
      >
        {mark}
      </Square>
    )
  })

  return (
    <section className='game'>
      {boardMap}
    </section>
  )
}

export default Board
