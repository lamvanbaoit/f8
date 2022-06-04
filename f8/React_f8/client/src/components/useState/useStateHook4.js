import React, {useState} from 'react'
import Mounted from './Mounted'

//  Mounted & Unmounted
const AppUseState4 = () => {
   const [show, setShow] = useState(false)

    return (
        <div style={{ padding: 32 }}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {
                show && <Mounted/>
            }
        </div>

        
    )
}

export default AppUseState4
