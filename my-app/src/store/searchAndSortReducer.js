const initialState = {
	searchResults: [],
	sortTodosState: [],
	searchTerm: '',
	checkedSortCheckbox: false,
};

const searchAndSortReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SORT_TODO':
			return {
				...state,
				sortTodosState: payload,
			};
		case 'CHECKED_SORT_CHECKBOX':
			return {
				...state,
				checkedSortCheckbox: payload,
			};
		case 'SEARCH_TODO':
			return {
				...state,
				searchResults: payload,
			};
		case 'CHANGE_SEARCH_TERM':
			return {
				...state,
				searchTerm: payload,
			};

		default:
			return state;
	}
};

export default searchAndSortReducer;
