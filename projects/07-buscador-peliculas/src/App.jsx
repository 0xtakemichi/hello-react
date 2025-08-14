import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useEffect, useRef } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Search query cannot be empty.')
      return
    }
    if (search.length < 3) {
      setError('Search query must be at least 3 characters long.')
      return
    }
    if (!/^[a-zA-Z0-9 ]*$/.test(search)) {
      setError('Search query must not contain special characters.')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie Search</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
              value={search}
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
