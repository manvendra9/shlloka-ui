import React from 'react'
import Image1 from "./Images/image-about-yogasanas1.png";
import Image2 from "./Images/image-about-yogasanas2.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";
import Wave from "./Images/image-wave2.png"



// import Wave from "./Images/image-wave3.png"

import "./style.css";


export default function About() {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-yogasanas-leaf" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave2" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-yogic-food" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">The word asana literally means a posture. Out of the innumerable asanas a body can assume, 84 have been identified as Yogasanas, through which one can transform the body and mind into a possibility for ultimate well-being. Yogasanas are not exercise, but rather very subtle processes to manipulate one's enrgy in a particular direction.</p>
                        <p className="p-italic">In an untrained state, the human body is a constant manifestation of various levels of compulsivness. By consciously forming the body into a certain posture, one creates a conducive passage for energy flow that can elevate one's consciousness. Yogasanas are a way of aligning the inner system and adjusting it to the celestial geometry, thereby becoming in sync with the existence and naturally achieving a chemistry of healthfulness, joyfulness, blissfulness and above all, balance.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
                <div className="container-flex-row">

                    <div className="container-course-description">
                        <p className="p-italic">Hatha Yoga is offered as a set of 21 powerful postures or yogasanas to enable the system to sustain higher dimensions of energy. the profound science enhances how one thinks, feels and experience life. Isha's program requires no special physical agility or prevous experience of yoga. It is not merely physical exercise, but enables a person to flower into his ultimate potential to naturally achieve a state of health, joy and bliss.</p>
                        <p className="p-italic">Yogasanas are physical postures through which one can transform the body and the mind into a possibility for ultimate wellbeing. Offered as a set of 21 powerful postures, this is a way of aligning the inner system and adjusting it to the celestial geometry. Yogasanas are not exercises, but rather very subtle processes to manipulate one's energy to naturally achieve a chemistry of health, joy, blissfullness and above all balance.</p>
                        <button>Register and Pay</button>
                    </div>
                    <div>
                        <img src={Image2} className="image-course-about-yogic-food" />
                    </div>
                </div>
            </section>
        </div>
    )
}