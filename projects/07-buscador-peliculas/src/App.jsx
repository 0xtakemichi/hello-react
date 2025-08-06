import './App.css'
import resposeMovies from './mocks/with-results.json'
import withoutResults from './mocks/without-results.json'

function App() {
  const movies = resposeMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie Search</h1>
          <form action="" className="form">
            <input type="text" placeholder="Search for a movie..." />
            <button type="submit">Search</button>
          </form>
        </header>

        <main>
          <h2>Search Results</h2>
          {
            hasMovies ? (
              <ul>
                {movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )
          }
        </main>
      </div>
    </>
  )
}

export default App
