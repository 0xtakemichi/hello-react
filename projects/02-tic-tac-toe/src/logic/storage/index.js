export const saveGameToStorage = (board, turn) => {
    // Guardar la partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameInStorage = () => {
    // Reiniciar el juego en el almacenamiento local
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}