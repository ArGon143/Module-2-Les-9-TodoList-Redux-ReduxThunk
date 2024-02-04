import React, { useState } from 'react';
import styles from './CreatingTodo.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { getCreateTodo } from '../../store/actions';

function CreatingTodo() {
	const [inputValue, setInputValue] = useState('');

	const dispatch = useDispatch();

	const createTodo = (inputValue) => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: inputValue,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Новое дело добавлено', response);
				dispatch(getCreateTodo(response));
			});
	};

	const formInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleCreating = () => {
		createTodo(inputValue);
		setInputValue('');
	};

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type="text"
				value={inputValue}
				onChange={formInputChange}
			/>
			<Button
				disabled={inputValue === ''}
				onClick={handleCreating}
				titleButton="Добавить"
			/>
		</form>
	);
}

export default CreatingTodo;
