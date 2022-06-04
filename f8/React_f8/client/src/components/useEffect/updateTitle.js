import React, { useEffect, useState } from 'react';

// Phần chung useEffect: Callblack luôn được gọi sau khi component mounted
// 1.useEffect(callback)
// - Gọi callback mỗi khi component re-render
// + nghĩa là khi ta nhập dữ liệu vào setTitle nó sẽ re-render component ở đây component là UpdateTitle
// - Gọi callback sau khi component thêm element vào DOM:
// + nghĩa là nó chạy cái đoạn return thêm element vào DOM rồi mới tới useEffect (nó in ra cái console.log('Render') rồi mới tới console.log('Mounted') )

// 2.useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// 3.useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// 1. Update DOM with title dùng cách useEffect(callback)
function UpdateTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
    console.log('Mounted');
  });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {console.log('Render')}
    </div>
  );
}

export default UpdateTitle;
