import React from 'react'
import Wave from "./Images/image-wave2.png"
import Image from "./Images/image-about.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-jalaneti-wave2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-jalaneti-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-jalaneti" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">During the class we will be teaching the correct way to practice Jala Neti. It is a delicate process, which if done improperly can either reduce the benefit or can even cause irreparable damage. Each participant has the opportunity to receive their own Jala Neti port. This pot has been designed by Sadhguru and is made of copper to maximise the benefits of the practice.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}