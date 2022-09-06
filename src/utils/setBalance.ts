import { GameStatus } from "../types/types"

export const setBalance = (balance: number, bet: number, gameStatus: GameStatus): number => {
    if (gameStatus === 'won') {
        return balance + bet * 2
    }

    if (gameStatus === 'draw') {
        return balance + bet
    }

    return balance
}