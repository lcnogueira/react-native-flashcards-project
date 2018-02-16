import { 
  ADD_DECK, 
  RECEIVE_DECKS,
  DELETE_ALL_DECKS,
  ADD_CARD 
} from '../utils/actionTypes';

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
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deckTitle]:{
          title: action.deckTitle,
          questions: [
            ...state[action.deckTitle].questions,
            action.card
          ]
        }
      };
    case DELETE_ALL_DECKS: 
      return {};
    default:
      return state;
  }
};

export default decks;