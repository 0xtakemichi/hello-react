// Componente funcional que representa una casilla individual del tablero.
// Recibe:
// - children: lo que se renderiza dentro de la casilla (❌, ⭘ o vacío)
// - isSelected: booleano para resaltar el turno actual.
// - updateBoard: función para actualizar el tablero cuando se hace clic.
// - index: posición de la casilla en el tablero.
export const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}