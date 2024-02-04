import React, { useEffect } from 'react';
import styles from './TodosPage.module.css';
import todosImg from './todos100x100.png';
import TodoList from '../TodoList/TodoList';
import CreatingTodo from '../CreatingTodo/CreatingTodo';
import { loadTodos } from '../../store/todosReducer';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/selectors';

const TodoPage = () => {
	const isLoading = useSelector(setIsLoading());

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTodos());
	}, [dispatch]);

	return (
		<main className={styles.TodoPage}>
			<section className={styles.PageHeader}>
				<img src={todosImg} alt="todos" />
				<h1 className={styles.TitlePageHeader}>Список дел</h1>
			</section>
			<section className={styles.formContainer}>
				<CreatingTodo />
			</section>

			{isLoading ? <div className={styles.loader}></div> : <TodoList />}
		</main>
	);
};

export default TodoPage;
