import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousQuery = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (previousQuery.current === query) return
    try {
      setLoading(true)
      previousQuery.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
      setLoading(false)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const memoSortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: memoSortMovies, getMovies, loading }
}
