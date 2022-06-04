- Hook -Gắn (gắn vào component)
- Hooks được thêm vào React từ phiên bản 16.8.0
import {
  useState, 
  useEffect, 
  useLayoutEffect, 
  useRef, 
  useCallback, 
  useMemo, 
  useReducer, 
  useContext, 
  useImperativeHandle, 
  useDebugValue
} from 'react'

# Chưa dùng Hooks, chỉ là UI component
function ComponentA() {
    return <div>Have is used hooks yet</div>
}

# Sử dụng Hooks, hỗ trợ nhiều tính năng
function ComponentB() {
    // useState
    const [state, setState] = useState(initState)

    // useEffect
    useEffect(() => {

    },[deps])

    // useLayoutEffect
    useLayoutEffect(() => {

    },[deps])

    // useRef
    const ref = useRef()

    // useCallback
    const fn = useCallback(() => {

    },[deps])

    // useMemo 
    const result = useMemo(() => {
        // return result for memo
    },[deps])

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init)

    // useContext
    const value = useContext(MyContext)

    // useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    // useDebugValue
    useDebugValue ? 'Online' : 'Offline'

    return <div>Hooks</div>
}

1. Chỉ dùng cho function component
2. Component đơn giản và trở nên dễ hiểu
    + Không bị chia logic ra như method trong lifecycle của Class Component
    + Không cần sử dụng "this"
3. Sử dụng Hooks khi nào?
    + Dự án mới => hooks
    + Dự án cũ
        * Component mới => function component + hooks
        + Component cũ => Giữ nguyên, có time tối ưu sau
    + Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component

// Function component
function Item({children}) {
    return <div>{children}</div>
}

// Class component
class List extends React.Component {
    render() {
        return (
            <div>Class component</div>
        )
    }
}


