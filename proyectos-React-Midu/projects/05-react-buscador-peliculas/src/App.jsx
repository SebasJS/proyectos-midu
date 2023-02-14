import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const debounceGetMovies = useCallback(
    debounce(({ query }) => {
      getMovies({ query })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setQuery(newSearch)
    debounceGetMovies({ query: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>TU PELI FAVORITA</h1>
        <form className='' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avegers, Star Wars' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? 'Cargando...' : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
