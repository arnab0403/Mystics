import React,{useRef,useEffect,useState} from "react"
import "./Camera.css";
import {useNavigate} from "react-router-dom";

function Camera(){
    const navigate=useNavigate();
    const videoRef=useRef(null);
    const photoRef=useRef(null);

    const [hasPhoto,setHasPhoto]=useState(false);

    const getVideo =()=>{
        navigator.mediaDevices.getUserMedia({video:{width:1920,height:1080}})
        .then(stream =>{
            let video=videoRef.current;
            video.srcObject=stream;
            video.play();
        })
        .catch(err=>{
            console.log("error");
        })
    }
    const takePhto=()=>{
        const width=414;
        const height=width/(16/9);

        let video=videoRef.current;
        let photo=photoRef.current;

        photo.width=width;
        photo.height=height;

        let ctx=photo.getContext('2d');
        ctx.drawImage(video,0,0,width,height);
        setHasPhoto(true);
        console.log(photoRef );
        navigate("/");
        
    }


    useEffect(()=>{
        getVideo();
    },[videoRef]);
    return <>
    <div className="App">
        <div className="camera">
            <video ref={videoRef}></video>
            <button className="button" onClick={takePhto}>SNAP</button>
        </div>
        <div className={'result'+(hasPhoto ? 'hasPhoto':'')}>
            <canvas ref={photoRef}></canvas>
        </div>
    </div>
    </>
}

export default Camera;