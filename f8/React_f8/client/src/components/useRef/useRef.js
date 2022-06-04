import React, { useEffect, useRef, useState } from 'react';

function UseRef() {
  const [count, setCount] = useState(60);

  const timeId = useRef(); // là một object
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  });

  useEffect(() => {
    const react = h1Ref.current.getBoundingClientRect();
    console.log(h1Ref.current);
    console.log(react);
  });

  const handleStart = () => {
    // khi nó chạy setInterval() và gán lại cho timeId.current nó đưa giá trị ra khỏi hàm
    // vì vậy nó mới dừng lại time chạy ngược lại được
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    // console.log('Start time: ', count);
  };

  const handleStop = () => {
    clearInterval(timeId.current);
    // console.log('Stop time: ', count);
  };

  console.log(count, prevCount.current);

  return (
    <div style={{ padding: 32 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
