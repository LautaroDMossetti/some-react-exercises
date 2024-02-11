import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useState, useRef } from 'react'

function App () {
  const { movies, getMovies, loading } = useMovies()
  const [error, setError] = useState(null)
  const noSearchYet = useRef(true)

  const handleSubmit = (event) => {
    // Prevent default page reload
    event.preventDefault()

    // Retrieve form data as we named it
    const fields = new window.FormData(event.target)
    const query = fields.get('query')

    // Check for invalid search inputs
    if (query === '' || query.length < 3) {
      setError('Minimun input of 3 characters')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('Can not search for only numbers')
      return
    }

    // If none, then no error is set
    setError(null)

    // If no error, then proceed to search for movies
    getMovies(query)
    noSearchYet.current = false
  }

  return (
    <div className='page'>

      <header>
        <h1>Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          name='query' placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        { loading ? <p>Loading...</p> : <Movies movies={movies} noSearchYet={noSearchYet.current} /> }
      </main>

    </div>
  )
}

export default App
