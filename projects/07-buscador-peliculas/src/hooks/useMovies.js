import resposeMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/without-results.json'

export function useMovies() {
    const movies = resposeMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    return { movies: mappedMovies }
}