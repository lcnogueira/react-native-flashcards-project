// const NOTIFICATION_KEY = 'Flashcards:notifications';

export const getCardsDesc = deck => {
  const { length } = deck.questions;
  return length === 0 ? 'No card' : ( length === 1 ? `${length} card` : `${length} cards`);
}

export const getCardNumberDesc = (deck, index) => `${index+1}/${deck.questions.length}`;

const getPercentage = (value, total) => (value/total * 100).toFixed(2);

export const showResult = (correctAnswers, questions) => 
  `You got ${correctAnswers} of ${questions} ${questions===1 ? 'question':'questions'}!\n(Efficiency: ${getPercentage(correctAnswers, questions)}%)`;