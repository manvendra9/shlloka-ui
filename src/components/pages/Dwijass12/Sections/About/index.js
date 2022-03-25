import React from 'react'
import Image from "../../Images/image-about.png";
import Wave from "../../Images/image-wave1.png";

import "./style.css";

export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass12-wave1" />
            </div>
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-dwijass12" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">Upa Yoga is a simple yet powerful set of practices that activate the joints, muscles and energy system, bringing ease to the whole system. Based on a sophisticated understanding of the body’s mechanics, Upa Yoga dispels inertia in the body’s energy and brings ease to the whole system.</p>
                        <ul className="ul-arrow">
                            <li>Upa Yoga</li>
                            <li>Yoga Namaskar</li>
                            <li>Pranayam</li>
                            <li>Meditations</li>
                            <li>Nada Yoga</li>
                            <li>Immunity building practices</li>
                            <li>Lifestyle Tips</li>
                            <li>Sadhguru’s Recorded Discourses</li>
                        </ul>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}