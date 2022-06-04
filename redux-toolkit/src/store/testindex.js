import { configureStore } from '@reduxjs/toolkit'
import { todoReducer1 } from './reducers/testtodesSlice'

// B1
// import { createSlice } from '@reduxjs/toolkit'
// const todosSlice = createSlice({
// 	name: 'todos', // tên của action // khi đụng đến action thì dùng tên này
// 	initialState: {
// 		allTodos: [
// 			{
// 				id: 1,
//				title: 'Viec 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Viec 2',
// 			}
// 		]
// 	}
// })

// B2
// Reducer
// const todoReducer1 = todosSlice.reducer

// B3
// Store
const store = configureStore({
	// reducer ko những thay đổi state mà còn lấy ra được state
	reducer: {
		todoReducer2: todoReducer1
	}
})
// Export Store
export default store

// B4
// Selector // xuất state cụ thể là (allTodos)
// export const todoSelector = state => state.todoReducer2.allTodos


