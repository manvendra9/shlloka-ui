import React from 'react'
import Image from "./Images/image-about-yogic-food.png";
import Wave from "./Images/image-wave2.png"

import "./style.css";

export default function About() {
    
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-yogic-food-wave2" />
            </div>
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-yogic-food" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">In yogic science, food is more than just a means of physical sustenance; what kind of food you put into your system can decide what kind of body and mind you create for yourself.</p>
                        <p className="p-italic">This course will cover - </p>
                        <ul className="ul-arrow">
                            <li>Yogic wisdom on Food and Diet</li>
                            <li>How to make use of food to bring vibrancy and alertness into your system</li>
                            <li>Learn simple diet secrets used by Yogis to live a long, healthy and joyful life</li>
                            <li>Take charge of your daily diet</li>
                            <li>Based on guidlines and wisdom by Sadhguru</li>
                        </ul>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}