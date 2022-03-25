import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-dwijass21-takeaway.png";

import ImageBackground from "./Images/image-background.png";


import "./style.css"

export default function ProgramTakeaway() {
    return (
        <div>
              <div style={{ position: "relative" }}>
                <img src={ImageBackground} className="image-course-dwijass21-cow" />
            </div>
            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-dwijass21-takeaway" />
                </div>
            </section>
        </div>
    )
}
