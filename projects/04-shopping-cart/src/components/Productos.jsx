function Productos() {
    const productos = [
        { id: 1, name: 'Cama para perro', price: 10000, img: '' },
        { id: 2, name: 'Collar para perro', price: 2000, img: '' },
        { id: 3, name: 'Caña de pescar para gato', price: 4500, img: '' },
    ]
  return (
    <div>
        <h2>Productos</h2>
        <p>Aquí puedes encontrar nuestros productos</p>
        <section>
            {productos.map((producto) => (
                <article key={producto.id}>
                    <img src={producto.img} alt={producto.name} />
                    <h3>{producto.name}</h3>
                    <p>{producto.price}</p>
                    <button>Agregar al carrito</button>
                </article>
            ))}
        </section>
    </div>
  )
}

export default Productos