import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  return (
    <main>
      <h1>App de gatos</h1>

      <button onClick={refreshFact}>Get new fact</button>

      <section>
        {fact && <p>{fact}</p>}
        {catImage && <img src={catImage} alt='image of cat' />}
      </section>
    </main>
  )
}

export default App
