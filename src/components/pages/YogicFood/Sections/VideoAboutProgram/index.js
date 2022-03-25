import React, { useEffect } from 'react'
import Divider from '../../../../ui/Divider';

import Leaf from "../../../Courses/Images/image-leaf2.png";
import Video from '../../../../ui/Video';
import Wave from "./Images/image-wave1.png";

import "./style.css"


export default function VideoAboutProgram(props) {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-yogic-food-wave1" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-yogic-food-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <h2>About the Program by <b>Shlloka</b></h2>
                    <Divider />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=u9BuQFQr2zE" }} />
            </section>
        </div >
    )
}
