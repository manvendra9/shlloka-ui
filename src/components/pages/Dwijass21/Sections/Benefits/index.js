import React from 'react'
import Divider from '../../../../ui/Divider';
import ImageYogaBeneifits from "./Images/image-dwijass21-benefits.png";
import Person from "./Images/image-person.png"
import Wave from "./Images/image-wave5.png"

import "./style.css";


export default function Benefits() {
    return (
        <div style={{position: "relative"}}>
             <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass21-wave5" />
            </div>

        
            {/* <img src={Person} className="image-course-dwijass21-person" /> */}
         
            <section>
                <h2 className="text-center">Dwijass Benefits</h2>
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
