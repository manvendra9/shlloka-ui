import React from 'react'
import Divider from '../../../../ui/Divider';
import ImageYogaBeneifits from "./Images/image-yogic-food-benefits.png";
import Image from "./Images/image-pot.png"
import Wave from "./Images/image-wave4.png"

import "./style.css";


export default function Benefits() {
    return (
        <div>
             <div style={{ position: "relative" }}>
                <img src={Image} className="image-course-yogic-food-pot2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-yogic-food-wave4" />
            </div>

            <section>
                <h2 className="text-center">Yogic Food Benefits</h2>
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
