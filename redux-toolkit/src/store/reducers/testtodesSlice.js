import { createSlice } from '@reduxjs/toolkit'

// Tách ra từ testindex.js 
// B1
const todosSlice = createSlice({
	name: 'todos', // tên của action // khi đụng đến action thì dùng tên này
	initialState: {
		allTodos: [
			{
				id: 1,
				title: 'Viec1'
			},
			{
				id: 2,
				title: 'Viec2'
			}
		]
	},
	render: {
		addTodo: (state, action) => {
			state.allTodos.unshift({
				id: 1,
				title: action.payload // cập nhật lại state	 
			})
		},

	}
})

// B2
// Export Reducer
export const todoReducer1 = todosSlice.reducer

// B3 Trong Store cụ thể là file (testindex.js)

// B4
// Selector
// xuất state cụ thể là (allTodos) 
// todoReducer2 ở trong store
export const todoSelector = state => state.todoReducer2.allTodos

// B5
// Export Action 
// Xuất action cụ thể là (addTodo)
export const { addTodo } = todosSlice.actions

