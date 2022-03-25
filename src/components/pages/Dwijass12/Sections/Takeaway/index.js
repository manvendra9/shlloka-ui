import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-program-takeaway.png";
import ImageParticipants from "./Images/image-dwijass12-participants.png"
import Wave from "../../Images/image-wave2.png";

import Cow from "../../../Courses/Images/image-cow.png";

import "./style.css"

export default function ProgramTakeaway() {
    return (
        <div>
             <div style={{ position: "relative" }}>
                <img src={Cow} className="image-course-dwijass12-cow" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass12-wave2" />
            </div>
            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-dwijass12-takeaway" />
                </div>
            </section>
        </div>
    )
}
