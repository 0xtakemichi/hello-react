import './Footer.css'

function Footer ({ filters }) {
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>Prueba técnica de React</h4>
            <span>@midudev 🫶🏼</span>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}

export default Footer