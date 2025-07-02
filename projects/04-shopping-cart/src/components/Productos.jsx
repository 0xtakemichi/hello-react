import Producto from "./Producto"

function Productos() {
    const productos = [
        { id: 1, name: 'Cama para perro', price: 10000, img: '', description: 'Cama cómoda para tu mascota' },
        { id: 2, name: 'Collar para perro', price: 2000, img: '', description: 'Collar ajustable y cómodo' },
        { id: 3, name: 'Caña de pescar para gato', price: 4500, img: '', description: 'Caña de pescar para horas de diversión' },
    ]
  return (
    <div>
        <h2 className="mt-20 text-4xl font-bold">Productos</h2>
        <p className="font-bold mb-8">Aquí puedes encontrar nuestros productos</p>

        <div className="flex gap-6 justify-center">
            {productos.map((producto) => (
                <Producto
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </div>
    </div>
  )
}

export default Productos