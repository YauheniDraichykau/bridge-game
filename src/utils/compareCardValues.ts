import { Card, GameStatus } from "../types/types"

export const cardValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'JACK': 10,
    'QUEEN': 11,
    'KING': 12,
    'ACE': 13
}

export const compareCardValues = (cards: Card[], chosenCard: Card): GameStatus => {
    const secondCard = cards.filter(item => item.code !== chosenCard.code)[0]
    
    if (secondCard.value === chosenCard.value) {
        return 'draw'
    }

    return cardValues[secondCard.value] > cardValues[chosenCard.value] ? 'lose' : 'won'
}