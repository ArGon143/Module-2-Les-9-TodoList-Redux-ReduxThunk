import React, { useEffect } from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSearchResults,
	getSearchTerm,
	getSortTodosState,
	getTodos,
	setCheckedSortCheckbox,
} from '../../store/selectors';
import {
	getChangeSearchTerm,
	getSearchResult,
	getSortTodos,
	setSortCheckboxChange,
} from '../../store/actions';

const TodoList = () => {
	const todos = useSelector(getTodos());

	const searchResults = useSelector(getSearchResults());
	const sortTodosState = useSelector(getSortTodosState());
	const searchTerm = useSelector(getSearchTerm());
	const checkedSortCheckbox = useSelector(setCheckedSortCheckbox());

	const dispatch = useDispatch();

	const handleSearchChange = (event) => {
		dispatch(getChangeSearchTerm(event.target.value));
	};

	const sortCheckboxChange = () => {
		dispatch(setSortCheckboxChange(!checkedSortCheckbox));
	};

	useEffect(() => {
		let results = todos.filter((item) =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		dispatch(getSearchResult(results));
	}, [dispatch, searchTerm, todos]);

	useEffect(() => {
		let sortTodosList;

		if (checkedSortCheckbox === false) {
			sortTodosList = todos.slice().sort((a, b) => null);
		} else if (checkedSortCheckbox === true) {
			sortTodosList = todos.slice().sort((a, b) => a.title.localeCompare(b.title));
		}
		dispatch(getSortTodos(sortTodosList));
	}, [checkedSortCheckbox, dispatch, todos]);

	let todoList;

	if (searchTerm) {
		if (checkedSortCheckbox) {
			let sortSearchResults = searchResults
				.slice()
				.sort((a, b) => a.title.localeCompare(b.title));
			todoList = sortSearchResults;
		} else todoList = searchResults;
	} else if (checkedSortCheckbox) {
		todoList = sortTodosState;
	} else if (checkedSortCheckbox && searchTerm) {
		todoList = sortTodosState;
	} else todoList = todos;

	return (
		<>
			{todos < 1 ? (
				<></>
			) : (
				<>
					<input
						className={styles.todoInput}
						type="text"
						placeholder="Найти дело"
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					<label>
						<input
							type="checkbox"
							checked={checkedSortCheckbox}
							onChange={sortCheckboxChange}
						/>
						Отсортировать дела по алфавиту
					</label>
				</>
			)}
			{todoList.map((todo) => (
				<div key={todo.id} className={styles.todoContainer}>
					<TodoItem key={todo.id} {...todo} />
				</div>
			))}
		</>
	);
};

export default TodoList;
