import React, {useState} from 'react'
// useState hook

/* 
    -Khi nào sử dụng?
    + Khi muốn dữ liệu thay đổi thì dao diện tự động cập nhật (render lại theo dữ liệu).
*/

// Cách dùng

/*
    import {useState} from 'react'

    function Component() {
        const [state, setState] = useState(initialState)
    }
*/

/*
    Lưu ý: 
    - Component được re-render sau khi `setState`
    - Initial state chỉ dùng cho lần đầu
    - Set state với callback?
    - Initial state với callback?
    - Set state là thay thế state bằng giá trị mới
*/  

const AppUseState1 = () => {
    // Initial state với callback?
    const orders = [100, 200, 300]
    // const total = orders.reduce((total, current) => total + current) 
    // console.log(total);
    const [order, setOrder] = useState(() => {
        // tối ưu hiệu năng hơn sẽ không re-render lại nữa
        // Initial state với callback?
        const total = orders.reduce((total, current) => total + current) 
        // console.log(total);
        return total;
    })

    const handleOrder = () => {
        setOrder(order + 1)
    }

    // ---------------------------------------------------------------------------
    const [info, setInfo] = useState({
        name: 'Binh',
        age: '18',
    })

    const handleUpdate = () => {
        // cách 1
        setInfo({
        ...info, // dữ nguyên dữ liệu
        address: 'VL, VN' // Set state là thay thế state bằng giá trị mới
        })
    }

    const handleUpdate2 = () => {
        // cách 2
        setInfo(prev => {
        // xử lý logic ở đây thì nên viết cách 2
        return {
            ...prev, // dữ nguyên dữ liệu
            address: 'VL, VN2' // Set state là thay thế state bằng giá trị mới
        }
        })
    }

    // ---------------------------------------------------------------------------
    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        // Component được re-render sau khi `setState` ở đây là setCounter
        setCounter(counter + 1) // Initial state chỉ dùng cho lần đầu vì vậy nó sẽ không tăng 3 lần
        setCounter(counter + 1)
        setCounter(counter + 1)
    }

    const handleIncrement2 = () => {
        // Set state với callback?
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
    }

    console.log('re-render');
    return (
        <div className="App" style={{ padding: 20}}>
          <h1>{counter}</h1>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleIncrement2}>Increment 2: Mỗi lần tăng lên 3</button>
          {/* -------------------------------------------------- */}
          <br></br>
          <h1>{order}</h1>
          <button onClick={handleOrder}>Order</button>
          <br></br>
          {/* -------------------------------------------------- */}
          <h1>{JSON.stringify(info)}</h1>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleUpdate2}>Update2</button>
          <br></br>
        </div>
    )
}

export default AppUseState1
