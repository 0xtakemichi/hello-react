// ============================
// Juego Tic-Tac-Toe en React  
// ----------------------------
// Este componente principal muestra cómo usar: 
// 1. useState para manejar estado local.
// 2. Props para comunicar componentes.
// 3. Renderizado condicional y mapeo de arrays.
// El código está comentado paso a paso para facilitar su lectura.
// ============================
import React from 'react'
import { useState } from 'react'

// Constante que define los iconos a utilizar para cada turno
const TURNS = {
    X: '❌',
    O: '⭕'
}

// Combinaciones de índices del tablero que representan una línea ganadora
const WINNERS_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Componente funcional que representa una casilla individual del tablero.
// Recibe:
// - children: lo que se renderiza dentro de la casilla (❌, ⭘ o vacío)
// - isSelected: booleano para resaltar el turno actual.
// - updateBoard: función para actualizar el tablero cuando se hace clic.
// - index: posición de la casilla en el tablero.
const Square = ({ children, isSelected, updateBoard, index }) => {

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

// Componente raíz de la aplicación. Aquí se mantiene el estado global del juego.
function App() {
    // Estado que representa las 9 casillas del tablero. 'null' indica casilla vacía.
  const [board, setBoard] = useState(Array(9).fill(null))
    // Estado que indica de quién es el turno actual.
  const [turn, setTurn] = useState(TURNS.X)
    // Estado que guarda el ganador (❌ u ⭕) o 'null' si aún no hay.
  const [winner, setWinner] = useState(null)

    // Función que comprueba si existe un ganador dadas las casillas actuales.
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNERS_COMBINATIONS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
    // Maneja el clic en una casilla. Actualiza el tablero, cambia turno y comprueba ganador.
  const updateBoard = (index) => {
    // Si la casilla ya está ocupada o hay un ganador, no hace nada
    if (board[index] || winner) return
    // Actualiza el tablero con el turno actual
    // Crea una copia del tablero actual y actualiza la casilla seleccionada
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambia el turno al siguiente jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Comprueba si hay un ganador después de actualizar el tablero
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Si no hay ganador y el tablero está lleno, es un empate
    }
  }

  const checkEndGame = (newBoard) => {
    // Comprueba si no hay más casillas vacías
    return newBoard.every(square => square !== null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square> 
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Ganador'
                }
              </h2>
              <header className='win'>
                {winner && <Square> {winner} </Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Reiniciar</button>
              </footer>
            </div>
          </section>
        )
      }
      <button onClick={resetGame}>Reiniciar</button>
    </main>
  )
}

export default App