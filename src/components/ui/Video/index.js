import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'


import BoxBlue from "./Images/image-box-blue.png"
import BoxGreen from "./Images/image-box-green.png"

import "./style.css"

export default function Video(props) {

    const [width, setWidth] = React.useState("640px");
    const [height, setHeight] = React.useState("360px");

    // const [title, setTitle] = React.useState("");
    console.log(props.title)

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setWidth("640px");
            setHeight("360px");
        } else {
            setWidth("100%");
            setHeight(`${360 / 640 * window.innerWidth}px`)
        }
    }

    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    
    return (
        <div className="container-video" style={{ width: { width }, height: { height } }}>

            <img src={BoxBlue} className="image-video-box-blue" />

            <img src={BoxGreen} className="image-video-box-green" />

            <ReactPlayer url={props.data.link}
                width={width}
                height={height}
                className="video" />
        </div>
    )
}
