import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../utils/actionTypes';

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const addCard = (deckTitle, card) => ({
  type: ADD_CARD,
  deckTitle,
  card
});
