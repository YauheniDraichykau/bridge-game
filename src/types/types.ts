export interface Deck {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'JACK' | 'QUEEN' | 'KING' | 'ACE' 

export interface Card {
    image: string
    value: CardValue
    suit: string
    code: string
}

export type GameStatus = 'not_started' | 'started' | 'won' | 'lose' | 'draw'