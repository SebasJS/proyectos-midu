import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilter'
import { products as initialValue } from './mocks/products.json'

function App () {
  const [products] = useState(initialValue)
  const { filterProducts } = useFilter()
  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
      <Footer />
    </>
  )
}

export default App
