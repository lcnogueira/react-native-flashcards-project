import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:decks';
const FLASHCARDS_HISTORY_KEY = 'Flashcards:history';

export const saveDeckTitle = (deckTitle) => {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  }));
};

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(decks => JSON.parse(decks));
};

export const getDeck = (deckTitle) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(decks => JSON.parse(decks)[deckTitle]);
};

export const addCardToDeck = (deckTitle, card) => {
  return getDeck(deckTitle)
  .then(deck => {
    deck.questions.push(card);
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [deckTitle]: deck
    }));
  });
};

export const removeAllDecks = () => {
  return AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY);
};

export const saveHistoryEntry = (entry) => {
  return AsyncStorage.getItem(FLASHCARDS_HISTORY_KEY)
    .then(entries => {
      const e = entries ? JSON.parse(entries) : [];
      e.push(entry);
      AsyncStorage.setItem(FLASHCARDS_HISTORY_KEY, JSON.stringify(e));
    });
};

export const getHistory = () => {
  return AsyncStorage.getItem(FLASHCARDS_HISTORY_KEY)
    .then(entries => JSON.parse(entries));
};

export const removeHistory = () => {
  return AsyncStorage.removeItem(FLASHCARDS_HISTORY_KEY);
};