export type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'JACK' | 'QUEEN' | 'KING' | 'ACE' 

export interface Card {
    image: string
    value: CardValue
    suit: string
    code: string
}

export interface FetchCardsResponse {
    success: boolean
    cards: Card[]
    deck_id: string
    remaining: number
}

export interface FetchDeckResponse {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}