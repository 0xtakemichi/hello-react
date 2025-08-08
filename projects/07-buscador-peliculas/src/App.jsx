import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useEffect } from 'react'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('Search query cannot be empty.')
      return
    }
    if (query.length < 3) {
      setError('Search query must be at least 3 characters long.')
      return
    }
    if (!/^[a-zA-Z0-9 ]*$/.test(query)) {
      setError('Search query must not contain special characters.')
      return
    }
    setError(null)
  }, [query])

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie Search</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
              value={query}
              onChange={handleChange}
              name='query'
              placeholder="Search for a movie..."
            />
            <button type="submit">Search</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
