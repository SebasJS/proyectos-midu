import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('Deber ingresar un nombre de pelicula')
      return
    }
    if (query.length < 3) {
      setError('Debe ingresar al menos 3 letras')
      return
    }
    setError(null)
  }, [query])

  return { error, query, setQuery }
}
