import './App.css'
import { Movies } from './components/Movies'
import resposeMovies from './mocks/with-results.json'
import withoutResults from './mocks/without-results.json'

function App() {
  const movies = resposeMovies.Search

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
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
