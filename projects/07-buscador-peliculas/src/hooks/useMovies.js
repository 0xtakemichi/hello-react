import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/without-results.json'
import { useState } from 'react'

export function useMovies({ search }) {
    const [resposeMovies, setResponseMovies] = useState([])
    const movies = resposeMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    const getMovies = () =>{
        if (search){
            // setResponseMovies(withResults)
            fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${search}`)
                .then(res => res.json())
                .then(json => {
                    setResponseMovies(json)
                })
        } else {
            setResponseMovies(withoutResults)
        }
    }
    return { movies: mappedMovies, getMovies }
}