const API_KEY = '2b466f7'

export const searchMovies = (search) => {
  if (search === '') return null

  try {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then(res => res.json())
      .then(json => {
        const movies = json.Search

        return movies?.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }))
      })
  } catch (e) {
    throw new Error('Error while searching movies')
  }
}
