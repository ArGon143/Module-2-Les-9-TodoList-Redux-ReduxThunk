export const getTodos = () => (state) => state.todosCRUD.todos;
export const setIsLoading = () => (state) => state.todosCRUD.isLoading;

export const getSearchResults = () => (state) => state.searchAndSort.searchResults;
export const getSortTodosState = () => (state) => state.searchAndSort.sortTodosState;
export const getSearchTerm = () => (state) => state.searchAndSort.searchTerm;
export const setCheckedSortCheckbox = () => (state) =>
	state.searchAndSort.checkedSortCheckbox;
