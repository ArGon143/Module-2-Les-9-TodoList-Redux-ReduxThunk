import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import EditTodo from '../EditTodo/EditTodo';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { DELETE_TODO } from '../../store/actions';

const TodoItem = ({ ...props }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch();

	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело удалено', response);
			});
	};

	const handleDelete = (id) => {
		dispatch(DELETE_TODO(id));
		deleteTodo(id);
	};

	const handleEdit = () => {
		setIsEdit((prevState) => !prevState);
	};

	const checkboxChange = () => {
		setChecked(!checked);
	};

	return (
		<>
			{isEdit ? (
				<EditTodo {...props} handleEdit={handleEdit} />
			) : (
				<>
					<div className={styles.todo}>{props.title}</div>
					<input type="checkbox" checked={checked} onChange={checkboxChange} />
					{checked ? (
						<Button
							onClick={() => handleDelete(props.id)}
							titleButton="Удалить"
						/>
					) : (
						<></>
					)}
					<Button onClick={handleEdit} titleButton="Редактировать" />
				</>
			)}
		</>
	);
};

export default TodoItem;
