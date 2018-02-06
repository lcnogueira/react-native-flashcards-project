import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards: decks';

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