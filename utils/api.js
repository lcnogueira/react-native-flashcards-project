import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:decks';

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