import { WINNERS_COMBINATIONS } from '../constants.js'

// Función que comprueba si existe un ganador dadas las casillas actuales.
export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    // Comprueba si no hay más casillas vacías
    return newBoard.every((square) => square !== null)
}