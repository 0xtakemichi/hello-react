import BubbleAlert from "./BubbleAlert"

function Carro() {
  return (
    <div>
        <span className="relative">
            <BubbleAlert n={10}/>
        </span>
        <button 
            className="bg-blue-500 text-white p-2 mt-2 rounded-lg cursor-pointer hover:bg-blue-600"
        >
            Carro
        </button>
    </div>
  )
}

export default Carro