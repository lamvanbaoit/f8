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

const tabs = ['posts', 'comments', 'albums'];

// 3. Call API dùng với useEffect(callback, [deps])
function CallsAPI() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
        console.log('re-render');
    }, [type]);

    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setType(tab)}>
                        {tab}
                    </button>
                ))}
            </div>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CallsAPI;
