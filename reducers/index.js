import { combineReducers } from 'redux';
import decks from './decks';
import history from './history';

export default combineReducers({
    decks,
    history
});