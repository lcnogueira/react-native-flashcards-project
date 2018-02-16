import { 
  ADD_HISTORY_ENTRY, 
  RECEIVE_HISTORY,
  DELETE_HISTORY
} from '../utils/actionTypes';

const history = (state = [], action) => {
  switch (action.type){
    case ADD_HISTORY_ENTRY:
      return [...state, action.entry];
    case RECEIVE_HISTORY:
      return [...action.entries];
    case DELETE_HISTORY:
      return [];
    default:
      return state;
  }
};

export default history;