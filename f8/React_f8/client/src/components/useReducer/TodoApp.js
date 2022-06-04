import React, { useReducer, useRef } from 'react';

// So sánh khác nhau giữa useState vs useReducer
// useState
// 1. Init state
// 2. Actions

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// 1. Init state
const initState = {
  job: '',
  jobs: [],
};
// 2. Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return { ...state, job: action.payload };
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.padding, 1);
      return { ...state, jobs: newJobs };
    default:
      return state;
  }
};

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
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
