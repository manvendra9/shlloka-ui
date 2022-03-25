import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-surya-kriya-takeaway.png";
import Wave from "./Images/image-wave3.png"
import ImageSun from "./Images/image-sun.png"
// import ImageParticipants from "./Images/image-yogic-food-participants.png"

// import Cow from "../../../Images/image-cow.png";


import "./style.css"

export default function ProgramTakeaway() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave3" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={ImageSun} className="image-angamardana-sun" />
            </div>

            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-yogic-food-takeaway" />
                </div>
                {/* <div className="text-center">
                    <img src={ImageParticipants} className="image-yogic-food-participants" />
                </div> */}
            </section>
        </div>
    )
}
