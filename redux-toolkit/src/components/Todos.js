import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	todosSelector,
	// markComplete,
	deleteTodo,
	getTodos
} from '../store/reducers/todosSlice' // B4 Export Selector (cụ thể là xuất state)
import TodoForm from './TodoForm'

const Todos = () => {
	// Nhận state ở đây và lấy state này để hiện lên giao diện
	const todos = useSelector(todosSelector)

	const dispatch = useDispatch()

	// const toggleTodoCompleted = todoId => {
	// 	console.log('toggleTodoCompleted', todoId)
	// 	dispatch(markComplete(todoId))
	// }

	const deleteSingleTodo = todoId => {
		console.log('deleteSingleTodo', todoId)
		dispatch(deleteTodo(todoId))
	}

	useEffect(() => {
		dispatch(getTodos())
	}, [dispatch])

	return (
		<div className='todo-list'>
			<TodoForm />
			<ul>
				{todos.map(todo => (
					// className={todo.completed ? 'completed' : ''}
					<li key={todo.id}>
						{todo.title}
						{/* <input
							type='checkbox'
							checked={todo.completed}
							onChange={toggleTodoCompleted.bind(this, todo.id)}
						/> */}
						<button onClick={deleteSingleTodo.bind(this, todo.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
