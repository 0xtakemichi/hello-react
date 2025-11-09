import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
import './Footer.css'

function Footer () {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
            {/* <h4>Prueba técnica de React</h4>
            <span>@midudev 🫶🏼</span>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}

export default Footer