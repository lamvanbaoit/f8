import { useRef, useState } from "react";
import "./styles.css";
import { useStore, actions } from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  console.log('state hiện tại', state);
  const { todos, todoInput } = state;
  console.log('todoInput', todoInput);

  const [showUpdate, setShowUpdate] = useState(false);
  const inputRef = useRef();
  const [idBtn, setIdBtn] = useState(null);

  const handleAdd = () => {
    if (todoInput.trim().length > 0) {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };

  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  const handleEdit = (todo, index) => {
    dispatch(actions.setTodoInput(todo));
    setShowUpdate(true);
    setIdBtn(index);
  };

  const handleUpdate = () => {
    dispatch(actions.updateTodo(todoInput, idBtn));
    setShowUpdate(false);
    setIdBtn(null);
    dispatch(actions.setTodoInput(""));
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />

      {!showUpdate && <button onClick={handleAdd}>Add</button>}
      {showUpdate && (
        <button id={idBtn} onClick={handleUpdate}>
          Update
        </button>
      )}

      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}
            <span onClick={() => handleDelete(index)}>&times;</span>
            <span onClick={() => handleEdit(todo, index)}>edit</span>
          </li>
        );
      })}
    </div>
  );
}
