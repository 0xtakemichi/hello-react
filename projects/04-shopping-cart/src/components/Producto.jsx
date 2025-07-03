import Button from "./Button";

function Producto(props) {
  const { producto, agregarAlCarrito } = props;
  return (
    <article className="flex flex-col items-center border border-blue-400 rounded-lg p-5 m-5 bg-gray-400">
      <img
        className="w-40 h-40 object-cover"
        src={producto.img}
        alt={producto.name}
      />
      <h3>{producto.name}</h3>
      <p className="font-bold">${producto.price}</p>
      <Button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </Button>
    </article>
  );
}

export default Producto;
