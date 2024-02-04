import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
	compose,
} from 'redux';
import todosReducer from './todosReducer';
import { thunk } from 'redux-thunk';
import searchAndSortReducer from './searchAndSortReducer';

const reducer = combineReducers({
	todosCRUD: todosReducer,
	searchAndSort: searchAndSortReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
