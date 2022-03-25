import React from 'react'
import Image from "./Images/image-about-surya-kriya.png";
import Wave from "./Images/image-wave2.png"

import "./style.css";

export default function About() {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave2" />
            </div>
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-yogic-food" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">“Surya” means “sun,” and “kriya” means “inner energy process.” Surya Kriya activates the system to raise the samat prana or solar heat in the system. It also balances a person’s left and right energy channels, leading to stability of the body and stillness of the mind. This strong foundation becomes the basis to explore higher dimensions of life.</p>
                        <p className="p-italic"><b>Traditionally available to a select groups of yogis, Surya Kriya is offered by Sadhguru as a comprehensive spiritual practice that is ideal for the hectic pace of today's world.</b></p>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}