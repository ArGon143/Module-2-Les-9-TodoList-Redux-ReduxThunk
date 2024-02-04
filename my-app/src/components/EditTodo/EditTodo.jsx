import React, { useState } from 'react';
import styles from './EditTodo.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { getEditTodo } from '../../store/actions';

function EditTodo({ handleEdit, ...props }) {
	const [isEditTodo, setisEditTodo] = useState(props.title);

	const dispatch = useDispatch();

	const editTodo = (id, isEditTodo) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: isEditTodo }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело отредактировано', response);
				dispatch(getEditTodo(response));
			});
	};

	const handleChange = (event) => {
		setisEditTodo(event.target.value);
	};

	const handleEditTodo = () => {
		editTodo(props.id, isEditTodo);
		handleEdit();
	};

	return (
		<>
			<textarea
				className={styles.todoInput}
				autoFocus
				rows={5}
				name={props.id}
				defaultValue={props.title}
				onChange={handleChange}
			/>
			<Button onClick={handleEditTodo} titleButton="Сохранить" />
			<Button onClick={handleEdit} titleButton="Отмена" />
		</>
	);
}

export default EditTodo;
