import React from 'react'
import Divider from '../../../../ui/Divider';
import ImageSuryaKriya from "./Images/image-surya-kriya-benefits.png";
// import Person from "./Images/image-person.png"
import Wave from "./Images/image-wave5.png"

import "./style.css";


export default function Benefits() {
    return (
        <div style={{position: "relative"}}>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave5" />
            </div>

            <section>
                <h2 className="text-center">Surya Kriya Benefits</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={ImageSuryaKriya} className="yoga-benifits" />
                </div>
            </section>
        </div>
    )
}
