import React from 'react'
import Image1 from "./Images/image-about1.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
    
            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-bhastrika-kriya-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-bhuta-shuddhi" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">The objective of the program is to help people implement a yogic lifestyle and make it a part of everyday life. You should not be doing yoga practices for just 2 - 3 hours a day, but you should be ON 24 Hours and every activity that you do can become a process for your wellbeing if you approach it that way.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}