import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    if (!query) {
      return
    }
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie Search</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input name='query' placeholder="Search for a movie..." />
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
