import React, { useRef, useState } from 'react'
import VIDEO from './video (2).mp4';
const RefExample = () => {
    const [play, setPlay] = useState(true);
    const tagRef = useRef();
    // console.log(tagRef);
    const videoRef = useRef();
    console.log(videoRef);
    const playOrPause = () =>{
        if (play === true){
            videoRef.current.play()
            console.log(play)
            setPlay(false);``
        }else{
            videoRef.current.pause()
            setPlay(true);
        }
    }
    return (
        <>
            <div ref={tagRef}>RefExample</div>
            <video src= {VIDEO} ref={videoRef} onClick={playOrPause}></video>
        </>
    )
}

export default RefExample;