import { ADD_DECK, RECEIVE_DECKS, ADD_CARD, ADD_HISTORY_ENTRY, RECEIVE_HISTORY } from '../utils/actionTypes';

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

export const addHistoryEntry = entry => ({
  type: ADD_HISTORY_ENTRY,
  entry
});

export const receiveHistory = entries => ({
  type: RECEIVE_HISTORY,
  entries
});
