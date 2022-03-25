import React from 'react'
import Divider from '../../../../ui/Divider';
import ImageYogaBeneifits from "./Images/image-surya-shakti-benefits.png";
// import Person from "./Images/image-person.png"
import Wave from "./Images/image-wave5.png";

import "./style.css";


export default function Benefits() {
    return (
        <div>
             <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-shakti-wave5" />
            </div>

            <section>
                <h2 className="text-center">Surya Shakti Benefits</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={ImageYogaBeneifits} className="yoga-benifits" />
                </div>
            </section>
        </div>
    )
}
