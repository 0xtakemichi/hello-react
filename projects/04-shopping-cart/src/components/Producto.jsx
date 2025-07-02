function Producto(props) {
    const producto = props.producto
  return (
    <article className="flex flex-col items-center border border-blue-400 rounded-lg p-5 m-5 bg-gray-400">
        <img className="w-40 h-40 object-cover" src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p className="font-bold">${producto.price}</p>
        <button className="bg-blue-500 text-white p-2 mt-2 rounded-lg">Agregar al carrito</button>
    </article>
  )
}

export default Producto