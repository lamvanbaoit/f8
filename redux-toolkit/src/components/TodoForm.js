import React, { useState } from 'react'
import { addTodo } from '../store/reducers/todosSlice' // B5 Export Action 
import { useDispatch } from 'react-redux'

const TodoForm = () => {
	const [title, setTitle] = useState('')

	const changeTitle = e => {
		setTitle(e.target.value)
	}

	const dispatch = useDispatch()

	const addSingleTodo = e => {
		e.preventDefault()
		// console.log(title)
		// Truyền dữ liệu vào action để cập nhật lại state
		dispatch(addTodo(title))
		setTitle('')
	}

	return (
		<div>
			<form onSubmit={addSingleTodo}>
				<input type='text' value={title} onChange={changeTitle} />
				<input type='submit' value='Add' />
			</form>
		</div>
	)
}

export default TodoForm
