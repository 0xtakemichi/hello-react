import Filters from './Filters'

function Header({ changeFilters }) {
        return (
            <>
                <h1>Shopping Cart</h1>
                <Filters onChange={changeFilters}/>
            </>
        )
    }

export default Header