import Card, { CardProps } from '../components/Card/Card';
import { v4 as uuidv4 } from 'uuid';

export const SUITS = {
    DIAMONDS: 'diamonds',
    HEARTS: 'hearts',
    CLUBS: 'clubs',
    SPADES: 'spades',
};

export const RANKS = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
};

//TODO: Implement game rules
export const RULES = {
    players: 4,
    maxCards: 7,
    trumps: false,
}

export const initCards = () => {
    const cards = [] as CardProps[]

    for (let suit of Object.values(SUITS)) {
        for (let rank of Object.values(RANKS)) {
            const id = uuidv4();
            cards.push(new Card({ id, suit, rank } as CardProps));
        }
    }
    return cards
}

export const shuffleCards = (cards: CardProps[]) => {
    const shuffledCards = cards;

    for (let i = shuffledCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i],
        shuffledCards[j]] =
            [shuffledCards[j],
            shuffledCards[i]];
    }
    return shuffledCards;
}

export const dealCards = (cards: CardProps[]) => {
    const pile1 = cards.slice(0, 7);
    const pile2 = cards.slice(7, 14);
    const pile3 = cards.slice(14, 21);
    const pile4 = cards.slice(21, 28);
    const stockPile = cards.slice(28, cards.length);   
    return { pile1, pile2, pile3, pile4, stockPile }
}

export const removeCard = (card: CardProps, cards: CardProps[]) => {
    let leftoverCards = [...cards];
    leftoverCards = cards.filter(leftoverCard => card !== leftoverCard )
    return leftoverCards;
}

export const isPlayableCard = (firstCard: CardProps, secondCard: CardProps) : boolean => {
    if (firstCard.suit !== secondCard.suit && firstCard.rank !== secondCard.rank) return false;
    return true;
}