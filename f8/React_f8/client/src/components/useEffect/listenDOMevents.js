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

// Dùng useEffect(callback, []) cho Listen DOM events
// Cleanup function luôn được gọi trước khi component unmounted
// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
function ListenDOMevents() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [countdown, setCountdown] = useState(180);
    const [countdown1, setCountdown1] = useState(10);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
        console.log('re-render');
    }, [type]);

    // Scroll
    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // console.log('addEventListener');

        // Cleanup function
        return () => {
            // khi ta component unmounted nó sẽ không bị lỗi
            // xóa nó đi trước khi unmounted
            // nó sẽ ko bị rò rỉ bộ nhớ
            window.removeEventListener('scroll', handleScroll);
            // console.log('removeEventListener');
        };
    });

    // Resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            // khi ta component unmounted nó sẽ không bị lỗi
            // xóa nó đi trước khi unmounted
            // nó sẽ ko bị rò rỉ bộ nhớ
            window.removeEventListener('resize', handleResize);
        };
    });

    // đếm ngược time cách 1
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    // đếm ngược time cách 2
    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountdown1(countdown1 - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [countdown1]);

    // avatar
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

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

            {showGoToTop && (
                <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go To Top</button>
            )}

            <div>Chiều ngang: {width}</div>

            <div>Đếm ngược time: {countdown}</div>
            <div>Đếm ngược time: {countdown1}</div>

            <input type="file" onChange={handlePreviewAvatar}></input>
            {avatar && <img src={avatar.preview} alt="Avatar" width="80%"></img>}
        </div>
    );
}

export default ListenDOMevents;
