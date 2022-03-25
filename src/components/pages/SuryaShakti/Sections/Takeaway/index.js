import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-surya-shakti-takeaway.png";
import Wave from "./Images/image-wave3.png"


import "./style.css"

export default function ProgramTakeaway() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-shakti-wave3" />
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
