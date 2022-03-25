import React from 'react'
import Wave from "./Images/image-wave2.png"
import Image1 from "./Images/image-about-surya-shakti1.png";
import Image2 from "./Images/image-about-surya-shakti2.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-shakti-wave2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-surya-shakti-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-yogic-food" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">Surya means "Sun" and Shakti means "Energy". Surya Shakti is a complete process, which is largely physical in nature. If you do 108 cycles of Surya Shakti, it will make you fit and you will not need any other form of exercise.</p>
                        <p className="p-italic">Surya Shakti builds the physical body - it makes the sinews and ligaments of your body strong. In Yoga, we give importance to the sinews that hold the skeletal system and the whole body together. When we do any yogic practice, which is physical in nature, the focus is mainly to strengthen those, not to pump up your muscles. Strengthening the sinews of the body is what will endure for a long time and keep you well. Surya Shakti does this in a tremendous way.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
                <div className="container-flex-row">

                    <div className="container-course-description">
                        <p className="p-italic">When we say Surya, we are talking about the Sun which is the basic powerhouse of the planet. Life on the planet is solar powered, including human system. Surya Shakti is a way of using that energy. It does wonders for your health, as well as your physical and mental wellbeing.</p>
                        <p className="p-italic">"Surya" manes "Sun" and "Shakti" means "energy". Surya Shakti is a dynamic form of the Sun Salutation which is an ancient yogic practice with a powerfull sequence of 18 postures.</p>
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