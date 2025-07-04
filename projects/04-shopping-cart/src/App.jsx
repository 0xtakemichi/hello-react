import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

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
  const carro = [{id: 1, name: "Cama para perro", price: 10000, img: "/", description: "Cama cómoda para tu mascota", cantidad: 1}];
  const agregarAlcarro = (producto) => {
    carro.push({ ...producto, cantidad: 1 })
  }

  return (
    <div>
      <Navbar />
      <Layout>
        <Title />
        <Productos productos={productos} agregarAlCarrito={agregarAlcarro} />
      </Layout>
    </div>
  );
}

export default App;
