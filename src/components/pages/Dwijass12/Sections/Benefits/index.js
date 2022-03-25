import React from 'react'
import Divider from '../../../../ui/Divider';
import ImageBeneifits from "./Images/image-dwijass12-benefits.png";
import Person from "./Images/image-person.png"

import "./style.css";


export default function Benefits() {
    
    return (
        <div style={{ position: "relative" }}>
            
            <img src={Person} className="image-course-dwijass12-person" />

            <section>
                <h2 className="text-center">Dwijass Benefits</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={ImageBeneifits} className="yoga-benifits"/>
                </div>
            </section>
        </div>
    )
}
