import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-yogasanas-benefits.png";
// import Person from "./Images/image-person.png"
import Wave from "./Images/image-wave5.png"

import "./style.css";


export default function Benefits() {
    return (
        <div style={{position: "relative"}}>
             <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-yogasanas-wave5" />
            </div>

            <section>
                <h2 className="text-center">Yogasanas Benefits</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="yoga-benifits" />
                </div>
            </section>
        </div>
    )
}
