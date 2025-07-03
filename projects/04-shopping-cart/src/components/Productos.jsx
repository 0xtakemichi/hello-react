import Producto from "./Producto";

function Productos(props) {
  const { productos, agregarAlCarrito } = props;

  return (
    <div>
      <h2 className="text-4xl font-bold">Productos</h2>
      <p className="font-bold mb-8">Aquí puedes encontrar nuestros productos</p>

      <div className="flex gap-6 justify-center">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;
