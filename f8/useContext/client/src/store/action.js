import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from "./constants";

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload: payload
})

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: payload
})
export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload: payload
})
export const updateTodo = (todo, index) => ({
    type: UPDATE_TODO,
    todo,
    index
})
