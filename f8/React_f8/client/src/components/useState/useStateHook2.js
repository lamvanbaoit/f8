import React, {useState} from 'react'

// Lưu ý
// 1. Array
// 2. Reference types

// Ví dụ
// 1. Random gift
// 2. Two-way Binding
// 3. Todolist

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    },
]

const gifts = [
    'CPU i9',
    'RAM 32G RGB',
    'RGB Keyboard',
]

const AppUseState2 = () => {
    // Random gift
    const [gift, setGift] = useState()

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    // ------------------------------------------------------------------------------
    
    const [name, setName] = useState('')
    // ------------------------------------------------------------------------------
    // Two-way Binding 
    const [checked, setChecked] = useState(2)

    const handleSubmit = () => {
        console.log({id: checked})
    }
    // ------------------------------------------------------------------------------
    const [check, setCheck] = useState([])
    console.log(check);
    const handleCheck = (id) => {
        setCheck(prev => {
            const isChecked = check.includes(id)

            if(isChecked) {
                return check.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleChecked = () => {
        console.log({ids: check})
    }

    return (
        <>
            {/* Random gift */}
            <div style={{ padding: 32}}>
                <h1>{gift || `Chưa có phần thưởng`}</h1>
                <button onClick={randomGift}>Lấy thưởng</button>
            </div>
            {/*  */}
            <div style={{ padding: 32}}>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => setName('Lam Van B')}>Change</button>
            </div>

            {/* Two-way Binding */}
            <div style={{ padding: 32}}>
                {courses.map(course => ( 
                    <div key={course.id}>
                        <input type="radio" checked={checked === course.id} onChange={() => setChecked(course.id)}/>
                        {course.name}
                    </div>
                ))

                }
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/* Check nhiều */}
            <div style={{ padding: 32}}>
                {courses.map(course => ( 
                    <div key={course.id}>
                        <input type="checkbox" checked={check.includes(course.id)} onChange={() => handleCheck(course.id)}/>
                        {course.name}
                    </div>
                ))

                }
                <button onClick={handleChecked}>Submit</button>
            </div>
        </>
       
    )
}

export default AppUseState2
