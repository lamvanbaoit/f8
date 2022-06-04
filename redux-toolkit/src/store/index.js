import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './reducers/todosSlice'

// B3
// Store
const store = configureStore({
	// reducer ko những thay đổi state mà còn lấy ra được state
	reducer: {
		// todosReducer: todosReducer (viết ngắn lại là todosReducer)
		// todosReducer lấy từ B2
		todosReducer
	}
})

// Export Store
export default store
