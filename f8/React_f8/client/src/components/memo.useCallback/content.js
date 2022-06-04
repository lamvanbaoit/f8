import React, { memo } from 'react';

// khi ko truyền dữ liệu nó sẽ ko bị re-render lại

function Content({ onIncrease }) {
  console.log('re-render');
  return (
    <>
      <div>Memo</div>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content);
