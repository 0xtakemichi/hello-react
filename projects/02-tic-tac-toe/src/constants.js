// Constante que define los iconos a utilizar para cada turno
export const TURNS = {
    X: '❌',
    O: '⭕'
}

// Combinaciones de índices del tablero que representan una línea ganadora
export const WINNERS_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]