import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies: mappedMovies } = useMovies()

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
          <Movies movies={mappedMovies} />
        </main>
      </div>
    </>
  )
}

export default App
