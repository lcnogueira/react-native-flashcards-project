import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../utils/actionTypes';

const decks = (state = {}, action) => {
  switch (action.type){
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckTitle]:{
          title: action.deckTitle,
          questions: [
            ...state[action.deckTitle].questions,
            card
          ]
        }
      };
    default:
      return state;
  }
};

export default decks;