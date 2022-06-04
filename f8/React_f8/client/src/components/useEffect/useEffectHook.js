import React, { useState } from 'react';
import CallsAPI from './callsAPI';
import CallAPI from './callAPI';
import UpdateTitle from './updateTitle';
import ListenDOMevents from './listenDOMevents';
import Content from './fakecoment';

// Side Effects nói đến chương trình phần mềm khi có tác động xảy ra nó dẫn đến việc dữ liệu chương trình bị thay đổi

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/* 
1. Update DOM
    - F8 Blog title
2. Call API
3. Listen DOM events
    - Scroll 
    - Resize
4. Cleanup 
    - Remove listener / Unsubscribe
    - Clear timer
*/

function UseEffectHook1() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      {/* 1. Update DOM */}
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UpdateTitle />}
      </div>

      {/* 2. Call API */}
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow1(!show1)}>Toggle</button>
        {show1 && <CallAPI />}
      </div>

      {/* 2. Call API */}
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow2(!show2)}>Toggle</button>
        {show2 && <CallsAPI />}
      </div>

      {/* 3. Listen DOM events */}
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow3(!show3)}>Toggle</button>
        {show3 && <ListenDOMevents />}
      </div>

      {/* fake comment */}
      <div style={{ padding: 32 }}>
        <button onClick={() => setShow4(!show4)}>Toggle</button>
        {show4 && <Content />}
      </div>
    </>
  );
}

export default UseEffectHook1;
