import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-surya-kriya-takeaway.png";
import Wave from "./Images/image-wave3.png"
import ImageBackground from "./Images/image.png";

import "./style.css"


export default function ProgramTakeaway() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave3" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={ImageBackground} className="image-course-surya-kriya-background" />
            </div>
            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-yogic-food-takeaway" />
                </div>
            </section>
        </div>
    )
}
