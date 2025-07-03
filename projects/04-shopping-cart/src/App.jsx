import Productos from './components/Productos'
import Layout from './components/Layout'

function App() {
  const productos = [
    {
      id: 1,
      name: "Cama para perro",
      price: 10000,
      img: "/",
      description: "Cama cómoda para tu mascota",
    },
    {
      id: 2,
      name: "Collar para perro",
      price: 2000,
      img: "/",
      description: "Collar ajustable y cómodo",
    },
    {
      id: 3,
      name: "Caña de pescar para gato",
      price: 4500,
      img: "/",
      description: "Caña de pescar para horas de diversión",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Tienda de productos para mascotas</h1>
        <p>Bienvenido a nuestra tienda de productos para mascotas</p>
      </div>
      <Layout>
        <Productos 
          productos={productos}
          agregarAlCarrito={() => console.log('Se deberia agregar el producto;)')}
        />
      </Layout>
    </>
  )
}

export default App