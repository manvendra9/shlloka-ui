import React from 'react'
import Sample from "./Images/image-what-is-yoga.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Wave3 from '../../../../utils/background/Wave3';

import "./style.css"

export default function WhatIsYoga() {

    return (
        <div>
            <Wave3 />
            <section>
                <h2>What is Isha Hatha Yoga?</h2>
                <p>Isha Hatha programs are an unparalleled opportunity to learn classical hatha yoga in its full depth and vibrancy. The programs are conducted by highly trained teachers and are not taught merely for physical fitness and strenght. They are a holistic process of naturally achieving mastery over the body and mind, so as to come to a state of health, joy, and bliss. The programs are an extensive exploration of hatha yoga and revive various dimensions of this ancient science that are largely absent in the world today.</p>
                <p><b>Isha Hatha Yoga encompasses five ancient and powerful practices that transform the body and mind into great possibilities.</b></p>
                <p><b>Programs are conducted by Shlloka- A teacher highly trained extensively under the guidance of Sadhguru</b></p>
                <img src={Sample} className="image-what-is-yoga" />
            </section>
        </div>
    )
}
