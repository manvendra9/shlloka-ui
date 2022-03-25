import React from 'react'
import Wave from "./Images/image-wave2.png"
import Image1 from "./Images/image-about1.png";
import Image2 from "./Images/image-about2.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-bhuta-shuddhi-wave2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-bhuta-shuddhi-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-bhuta-shuddhi" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">The basis for all creation, including the physical body is the group of five elements: earth, water, wind, fire, and space. The wellbeing of the body and mind can be established by purifying these five elements within the human system. This process also shapes the body into treading towards one’s ultimate wellbeing.</p>
                        <p className="p-italic">There is a whole system of yoga called Bhuta Shuddhi, which means purification of the elements (earth, water, fire, air and space) which gets to the root of imbalances in the body that lead to disease. This simple practice which could be performed on daily basis, alters your system at the elemental level</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
                <div className="container-flex-row">

                    <div className="container-course-description">
                        <p className="p-italic">The Bhuta Shuddhi processes offered by Isha provide a unique opportunity for everyone to benefit from this esoteric yogic science, which otherwise requires intense sadhana (spiritual practices).</p>
                        <p className="p-italic">The system of yoga called bhuta shuddhi is the fundamental process that inspires every other yogic practice.</p>
                        <button>Register and Pay</button>
                    </div>
                    <div>
                        <img src={Image2} className="image-course-about-bhuta-shuddhi" />
                    </div>
                </div>
            </section>
        </div>
    )
}