// const NOTIFICATION_KEY = 'Flashcards:notifications';

export const getCardsDesc = deck => {
  const { length } = deck.questions;
  return length === 0 ? 'No card' : ( length === 1 ? `${length} card` : `${length} cards`);
}