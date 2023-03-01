import './Products.css'
import { AddToCartIcon } from './icons'

export const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((products) => (
          <li key={products.id}>
            <img src={products.thumbnail} alt={products.title} />
            <div>
              <strong>{products.title}</strong> - ${products.price}
            </div>
            <div>
              <button><AddToCartIcon /></button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
