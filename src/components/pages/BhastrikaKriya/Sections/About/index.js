import React from 'react'
import Wave from "./Images/image-wave2.png"
import Image1 from "./Images/image-about1.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-bhuta-shuddhi-wave2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-bhastrika-kriya-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-bhuta-shuddhi" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">The number of breaths comes down. The need for breath will come down not only by increasing one’s lung capacity, but because the oxygen consumption is low. The system is in such a relaxed state, the metabolism has come down. So this works in 2 ways: the expansion of the lung capacity; and the relaxing of the whole system. With both of these The number of breaths comes down.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}