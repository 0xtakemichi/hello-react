// ============================
// Juego Tic-Tac-Toe en React  
// ----------------------------
// Este componente principal muestra cómo usar: 
// 1. useState para manejar estado local.
// 2. Props para comunicar componentes.
// 3. Renderizado condicional y mapeo de arrays.
// El código está comentado paso a paso para facilitar su lectura.
// ============================
import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'

// Componente raíz de la aplicación. Aquí se mantiene el estado global del juego.
function App() {
    // Estado que representa las 9 casillas del tablero. 'null' indica casilla vacía.
  const [board, setBoard] = useState(Array(9).fill(null))
    // Estado que indica de quién es el turno actual.
  const [turn, setTurn] = useState(TURNS.X)
    // Estado que guarda el ganador (❌ u ⭕) o 'null' si aún no hay.
  const [winner, setWinner] = useState(null)

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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
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