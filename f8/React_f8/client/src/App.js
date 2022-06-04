import { Routes, Route } from 'react-router-dom';

import AppUseState1 from './components/useState/useStateHook';
import AppUseState2 from './components/useState/useStateHook2';
import AppUseState3 from './components/useState/useStateHook3';
import AppUseState4 from './components/useState/useStateHook4';
import UseEffectHook1 from './components/useEffect/useEffectHook';
import UseLayoutEffect from './components/useLayoutEffect/useLayoutEffect';
import UseRef from './components/useRef/useRef';
import Memo from './components/memo.useCallback/memo';
import UseMemo from './components/useMemo/useMemo';
import UseReducer from './components/useReducer/useReducer';
import TodoApp from './components/useReducer/TodoApp';
import TodeAppRecap from './components/useReducer/TodeAppRecap/index';
import UseContext from './components/useContext/useContext';
import UseImperativeHandle from './components/useImperativeHandle/useImperativeHandle';

function App() {
    return (
        <Routes>
            <Route path="/usestate1" element={<AppUseState1 />}/>

            <Route path="/usestate2" element={<AppUseState2 />}/>

            <Route path="/usestate3" element={<AppUseState3 />}/>

            <Route path="/usestate4" element={<AppUseState4 />}/>

            <Route path="/useeffect1" element={<UseEffectHook1 />}/>

            <Route path="/useLayoutEffect" element={<UseLayoutEffect />}/>
                
            <Route path="/useRef" element={<UseRef />}/>              

            <Route path="/memo" element={<Memo />}/>

            <Route path="/useMemo" element={<UseMemo />}/>

            <Route path="/useReducer" element={<UseReducer />}/>
            <Route path="useReducer1"  element={<TodoApp />}/>
            <Route path="useReducer2"  element={<TodeAppRecap />}/>

            <Route path="/useContext" element={<UseContext />}/>
            
            <Route path="/useImperativeHandle" element={<UseImperativeHandle />}/>
        </Routes>
    );
}

export default App;
