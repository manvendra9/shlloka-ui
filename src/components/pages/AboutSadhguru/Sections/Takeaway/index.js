import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-takeaway.png";

import "./style.css"


export default function ProgramTakeaway() {
    return (
            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-yogic-food-takeaway" />
                </div>
            </section>
        
    )
}
