import React from 'react'
import ImageAbout1 from "./Images/image-about1.png";
import ImageAbout2 from "./Images/image-about2.png";

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
                        <img src={ImageAbout1} className="image-course-about-bhuta-shuddhi" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">Angamardana means gaining complete mastery over the limbs, organs and other parts of the body. It needs no fitness equipment.</p>

                        <p className="p-italic">True to its name, this practice revitalizes the body on all levels including the muscles, circulatory system, skeletal structure, nervous system and the basic energy system.</p>

                        <button>Register and Pay</button>
                    </div>
                </div>
                <div className="container-flex-row">

                    <div className="container-course-description">
                        <p className="p-italic">Angamardana strengthens the spine, builds physical strength, fitness and tenacity, taking years off the body. Designed by Sadhguru of the Isha foundation, Angamardana needs no fitness equipment. It involves only the body and floor exercises that can be practiced anywhere, even during travel.</p>
                        <p className="p-italic">With exercises carefully selected by Sadhguru, they are of universal appeal and application.</p>
                        <button>Register and Pay</button>
                    </div>
                    <div>
                        <img src={ImageAbout2} className="image-course-about-bhuta-shuddhi" />
                    </div>
                </div>
            </section>
        </div>
    )
}