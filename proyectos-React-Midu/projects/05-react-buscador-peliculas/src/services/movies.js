const API_KEY = '977e1420'

export const searchMovies = async ({ query }) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => (
      {
        title: movie.Title,
        id: movie.imdbID,
        year: movie.Year,
        type: movie.type,
        poster: movie.Poster
      }
    ))
  } catch (error) {
    throw new Error('Algo paso con la API')
  }
}
