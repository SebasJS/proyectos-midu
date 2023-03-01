import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialValue } from './mocks/products.json'

function App () {
  const [products] = useState(initialValue)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
