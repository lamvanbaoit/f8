import React, { useCallback, useState } from 'react';
import Content from './content';

// 1. memo() -> Higher Order Component (HOC) // memo tránh re-render lại khi ko truyền dữ liệu
// 2. useCallback() // tránh re-render
// Reference types (kiểu tham chiếu)
// React memo()

// Hooks
// HOC
// Render props

function Memo() {
  const [count, setCount] = useState(0);

  // trong trường hợp này nếu dùng useCallback thì nó ko bị re-render khi bấm tăng số vì nó ko tạo ra tham chiếu mới nữa
  // nếu ko dùng useCallback sẽ bị re-render khi mỗi lần click vì nó tạo ra tham chiếu mới
  const handleIncrease = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
}

export default Memo;
