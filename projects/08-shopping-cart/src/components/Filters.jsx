import { useState, useId } from 'react'
import './Filters.css'

export default function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

            <div>
                <label htmlFor={minPriceFilterId}>Min price</label>
                <input type="range" id={minPriceFilterId} min="0" max="2000" onChange={handleChangeMinPrice} value={minPrice} />
                <span>$ {minPrice}</span>
            </div>

        </section>
    )
}