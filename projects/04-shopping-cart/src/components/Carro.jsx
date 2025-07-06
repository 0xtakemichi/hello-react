import BubbleAlert from "./BubbleAlert"
import DetalleCarro from "./DetalleCarro"

function Carro({carro}) {
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
  return (
    <div>
        <span className="relative">
          {cantidad !== 0 ? (
            <BubbleAlert n={cantidad}/>
          ) : (
            null
          )}
        </span>
        <button 
            className="bg-blue-500 text-white p-2 mt-2 rounded-lg cursor-pointer hover:bg-blue-600"
        >
            Carro
        </button>
        <DetalleCarro carro={carro}/>
    </div>
  )
}

export default Carro