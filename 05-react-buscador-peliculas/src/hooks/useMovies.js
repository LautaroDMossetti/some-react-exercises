import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies.js'
// import responseResults from '../mocks/with-results.json'
// import responseNoResults from '../mocks/no-results.json'

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const previousSearch = useRef(null)

  const getMovies = (search) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setSearchError(null)
      previousSearch.current = search

      searchMovies(search)
        .then(movieResults => setMovies(movieResults))
    } catch (e) {
      setSearchError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, searchError }
}
