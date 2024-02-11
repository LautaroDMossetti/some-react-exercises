import Square from './Square'

const WinnerFrame = ({ winner, resetGame }) => {
  if (winner === null) return

  const winnerText = winner === false ? 'Draw' : 'The winner is: '
  const winnerMark = <header className='win'><Square>{winner}</Square></header>

  return (
      <section className='winner'>
        <div className='text'>
          <h2>
            {winnerText}
          </h2>

          {winner && winnerMark}

          <footer>
            <button onClick={resetGame}>Play again</button>
          </footer>
        </div>
      </section>
  )
}

export default WinnerFrame
