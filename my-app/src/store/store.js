import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux';
import todosReducer from './todosReducer';
import { thunk } from 'redux-thunk';
import searchAndSortReducer from './searchAndSortReducer';

const reducer = combineReducers({
	todosCRUD: todosReducer,
	searchAndSort: searchAndSortReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
