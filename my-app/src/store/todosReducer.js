import { getLoadTodos, setIsLoadingTodos } from './actions';

const initialState = {
	todos: [],
	isLoading: false,
};

const todosReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOAD_TODOS':
			return {
				...state,
				todos: state.todos.concat(payload),
			};
		case 'IS_LOADING':
			return {
				...state,
				isLoading: payload,
			};
		case 'CREATE_TODO':
			return {
				...state,
				todos: state.todos.concat(payload),
			};
		case 'EDIT_TODO':
			state.todos.forEach((todo) => {
				if (todo.id === payload.id) {
					todo.title = payload.title;
				}
			});
			return {
				...state,
				todos: state.todos.slice(),
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};

		default:
			return state;
	}
};

export const loadTodos = (arg) => (dispatch, getState) => {
	dispatch(setIsLoadingTodos(true));

	fetch('http://localhost:3005/todos')
		.then((loadedData) => loadedData.json())
		.then((loadedTodos) => {
			dispatch(getLoadTodos(loadedTodos));
		})
		.finally(() => {
			dispatch(setIsLoadingTodos(false));
		});
};

export default todosReduser;
