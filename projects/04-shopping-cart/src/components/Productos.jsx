function Productos() {
    const productos = [
        { id: 1, name: 'Cama para perro', price: 10000, img: '' },
        { id: 2, name: 'Collar para perro', price: 2000, img: '' },
        { id: 3, name: 'Caña de pescar para gato', price: 4500, img: '' },
    ]
  return (
    <div>
        <h2 className="text-2xl font-bold">Productos</h2>
        <p className="font-bold">Aquí puedes encontrar nuestros productos</p>
        <section>
            {productos.map((producto) => (
                <article key={producto.id}>
                    <img src={producto.img} alt={producto.name} />
                    <h3 className="text-lg font-bold">{producto.name}</h3>
                    <p className="font-bold">{producto.price}</p>
                    <button className="bg-blue-500 text-white p-2">Agregar al carrito</button>
                </article>
            ))}
        </section>
    </div>
  )
}

export default Productos