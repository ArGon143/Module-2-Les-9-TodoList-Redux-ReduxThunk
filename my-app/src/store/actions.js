export const getLoadTodos = (payload) => ({
	type: 'LOAD_TODOS',
	payload: payload,
});
export const setIsLoadingTodos = (payload) => ({
	type: 'IS_LOADING',
	payload: payload,
});
export const getCreateTodo = (payload) => ({ type: 'CREATE_TODO', payload: payload });
export const getEditTodo = (payload) => ({
	type: 'EDIT_TODO',
	payload: payload,
});
export const DELETE_TODO = (payload) => ({
	type: 'DELETE_TODO',
	payload: payload,
});

export const getSortTodos = (payload) => ({
	type: 'SORT_TODO',
	payload: payload,
});
export const setSortCheckboxChange = (payload) => ({
	type: 'CHECKED_SORT_CHECKBOX',
	payload: payload,
});
export const getSearchResult = (payload) => ({
	type: 'SEARCH_TODO',
	payload: payload,
});
export const getChangeSearchTerm = (payload) => ({
	type: 'CHANGE_SEARCH_TERM',
	payload: payload,
});
