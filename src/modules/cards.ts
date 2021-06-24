import Card, { CardProps } from '../components/Card/Card';

export const SUITS = {
    DIAMONDS: 'diamonds',
    HEARTS: 'hearts',
    CLUBS: 'clubs',
    SPADES: 'spades',
};

export const VALUES = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
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

export const initCards = () => {
const cards = [] as CardProps[]

for (let suit of Object.values(SUITS)) {
    for (let rank of Object.values(RANKS)) {
      cards.push(new Card({ suit, rank } as CardProps));
    }
  }
return cards
}

export const shuffleCards = (cards: CardProps[]) => {
const shuffledCards = cards;

for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
    }
return shuffledCards;
}

export const dealCards = (cards: CardProps[]) => {

    }