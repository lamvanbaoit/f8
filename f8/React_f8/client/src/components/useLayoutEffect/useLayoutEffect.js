import React, { useLayoutEffect, useState } from 'react';

/*
  useEffect
  1. cập nhật lại state
  2. cập nhật lại DOM (mutated)
  3. Render UI
  4. Gọi cleanup nếu deps thay đổi
  5. Gọi useEffect callback
*/

// => sự khác nhau giữa useEffect vs UseLayoutEffect là chỗ Render UI

/*
  UseLayoutEffect
  1. cập nhật lại state
  2. cập nhật lại DOM (mutated)
  3. Gọi cleanup nếu deps thay đổi (sync) 
  4. Gọi useLayoutEffect callback (sync) 
  5. Render lại UI
*/

function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  // nó sẽ bị chóp nhoáng
  // useEffect(() => {
  //   if (count > 3) setCount(0);
  // }, [count]);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default UseLayoutEffect;
