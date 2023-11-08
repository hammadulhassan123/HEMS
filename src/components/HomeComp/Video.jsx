import { useRef, useState } from "react"
import React from 'react'
import { Button } from 'react-bootstrap'
import videoSrc from "./Solar3D.mp4"
import "../styles/home.css"

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
     {/* Video is here */}
     <div className='main'>
        <div className="overlay"></div>
        <video ref={videoRef} src={videoSrc} autoPlay loop muted />
        <div className="content">
            <h1>Welcome To</h1>
            <p>Home Energy Management System</p>
            <Button variant="light" className="text-success" onClick={handlePlayPause}>
                {isPlaying ? '⏸' : '▶'}
            </Button>
        </div>
    </div>
    </>
  )
}
