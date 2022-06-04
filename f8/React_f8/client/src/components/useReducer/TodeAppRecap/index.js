import React, { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { addJob, setJob, deleteJob } from './actions';
import logger from './logger';
// So sánh khác nhau giữa useState vs useReducer
// useState
// 1. Init state
// 2. Actions

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

function TodoApp() {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    };

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>Todo App with useReducer</h1>
            <input
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
