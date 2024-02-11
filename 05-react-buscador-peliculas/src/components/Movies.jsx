function MoviesList ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => {
          return <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title}/>
          </li>
        })
      }
    </ul>
  )
}

function NoMovieResults () {
  return <p>No movies were found for this search</p>
}

function Movies ({ movies, noSearchYet }) {
  if (noSearchYet) return
  // first check if there are movie results from the search
  // if so, then render a list of movies
  // if not, show the user no movies were found
  return (movies?.length > 0) ? <MoviesList movies={movies} /> : <NoMovieResults />
}

export default Movies
