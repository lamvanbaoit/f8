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

// 2. Call API dùng cách useEffect(callback, [])
function CallAPI() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
        console.log('re-render');
    }, []);

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CallAPI;
