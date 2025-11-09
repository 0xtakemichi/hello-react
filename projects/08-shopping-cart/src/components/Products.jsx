import './Products.css'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products({ products }) {
    const { addToCart } = useCart()

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <span>$ {product.price}</span>
                        </div>
                        <div>
                            <button onClick={() => addToCart(product)}>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}