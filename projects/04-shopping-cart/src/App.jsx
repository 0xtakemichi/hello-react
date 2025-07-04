import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [carro, setCarro] = useState([
    {
      id: 1,
      name: "Cama para perro",
      price: 10000,
      img: "/",
      description: "Cama cómoda para tu mascota",
      cantidad: 1,
    },
  ]);
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
  const agregarAlcarro = (producto) => {
    console.log(carro);
    const existe = carro.find((item) => item.id === producto.id);
    if (existe) {
      const nuevoCarro = carro.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      return setCarro(nuevoCarro);
    } else {
      return setCarro([...carro, { ...producto, cantidad: 1 }]);
    }
  };
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
