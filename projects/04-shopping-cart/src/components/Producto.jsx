import Button from "./Button";

function Producto(props) {
  const { producto, agregarAlCarrito } = props;
  return (
    <article className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto my-4">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          src={producto.img}
          alt={producto.name}
        />
      </div>
      <div className="p-4 w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{producto.name}</h3>
        <p className="text-xl font-bold text-blue-600 mb-4">${producto.price}</p>
        <Button 
          onClick={() => agregarAlCarrito(producto)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Agregar al carrito
        </Button>
      </div>
    </article>
  );
}

export default Producto;
