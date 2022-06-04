import React, { useRef } from 'react'
import Video from '../../videos/Video'

function UseImperativeHandle() {
    const videoRef = useRef();

    // useEffect(() => {
    //     console.log(videoRef.current);
    // })

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play Video</button>
            <button onClick={handlePause}>Pause Video</button>
        </div>
    )
}

export default UseImperativeHandle
