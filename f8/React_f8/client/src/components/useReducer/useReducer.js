import React, { useReducer, useState } from 'react';

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
const initState = 0;
// 2. Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// 3. Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, setCount] = useState(0);
  const [count1, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <div style={{ padding: '0 20px' }}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Down</button>
        <button onClick={() => setCount(count + 1)}>Up</button>
      </div>
      <div style={{ padding: '0 20px' }}>
        <h1>{count1}</h1>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
    </>
  );
}

export default UseReducer;
