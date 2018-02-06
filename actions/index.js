import { ADD_DECK, RECEIVE_DECKS } from '../utils/actionTypes';

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});
