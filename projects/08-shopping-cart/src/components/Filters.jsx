import { useState } from 'react'
import './Filters.css'

export default function Filters() {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

            <div>
                <label htmlFor="price">Min price</label>
                <input type="range" id="price" min="0" max="2000" onChange={handleChangeMinPrice} value={minPrice} />
                <span>$ {minPrice}</span>
            </div>

        </section>
    )
}