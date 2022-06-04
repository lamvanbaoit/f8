import {
    ADD_TODO,
    SET_TODO_INPUT,
    DELETE_TODO,
    UPDATE_TODO
} from "./constants";

const initState = {
    todos: [],
    todoInput: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos
            };
        case UPDATE_TODO:
            const todos = [...state.todos];
            todos[action.index] = action.todo;
            return {
                ...state,
                todos: todos
            };
        default:
            throw new Error("invalid action");
    }
};

export { initState };
export default reducer;
