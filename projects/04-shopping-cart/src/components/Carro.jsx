import BubbleAlert from "./BubbleAlert"
import DetalleCarro from "./DetalleCarro"
import { useState } from "react"

function Carro({carro}) {
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
  const [isCarroVisible, setIsCarroVisible] = useState(false)

  const toggleCarro = () => {
    if(carro.length === 0) {
      return
    }
    setIsCarroVisible(!isCarroVisible)
  }
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
            onClick={() => toggleCarro()}
            className="bg-blue-500 text-white p-2 mt-2 rounded-lg cursor-pointer hover:bg-blue-600"
        >
            Carro
        </button>
        {isCarroVisible ? (
            <DetalleCarro carro={carro}/>
        ) : null}
    </div>
  )
}

export default Carro