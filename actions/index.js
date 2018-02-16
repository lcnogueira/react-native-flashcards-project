import { 
  ADD_DECK, 
  RECEIVE_DECKS, 
  ADD_CARD, 
  ADD_HISTORY_ENTRY, 
  RECEIVE_HISTORY,
  DELETE_ALL_DECKS,
  DELETE_HISTORY
} from '../utils/actionTypes';

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

export const deleteAllDecks = () => ({
  type: DELETE_ALL_DECKS
});

export const addHistoryEntry = entry => ({
  type: ADD_HISTORY_ENTRY,
  entry
});

export const receiveHistory = entries => ({
  type: RECEIVE_HISTORY,
  entries
});

export const deleteHistory = () => ({
  type: DELETE_HISTORY
});