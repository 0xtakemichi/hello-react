import Productos from './components/Productos'

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Tienda de productos para mascotas</h1>
        <p>Bienvenido a nuestra tienda de productos para mascotas</p>
      </div>
      <div>
        <Productos />
      </div>
    </>
  )
}

export default App