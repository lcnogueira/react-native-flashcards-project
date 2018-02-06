import { ADD_DECK, RECEIVE_DECKS } from '../utils/actionTypes';

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
    default:
      return state;
  }
};

export default decks;