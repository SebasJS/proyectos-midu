import { useState } from 'react'
import './Filters.css'

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    changeFilters(previousFilters => {
      return {
        ...previousFilters,
        minPrice: event.target.value
      }
    })
  }

  const handleChangeCategory = (event) => {
    changeFilters(previousFilters => {
      return {
        ...previousFilters,
        category: event.target.value
      }
    })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoria</label>
        <select
          id='category'
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
