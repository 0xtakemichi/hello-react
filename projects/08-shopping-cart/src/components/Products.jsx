import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products({ products }) {
    const { addToCart, cart, removeFromCart } = useCart()

    const isInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = isInCart(product)
                    return (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <span>$ {product.price}</span>
                        </div>
                        <div>
                            <button
                            style={{background: isProductInCart ? '#ff0000' : '#00ff00'}}
                            onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }}>
                                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}