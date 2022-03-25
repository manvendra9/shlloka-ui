import React from 'react'
import Wave from './Images/image-wave1.png';
import Statues from "./Images/image-statue.png"

import "./style.css"
import LandingWave from '../../../Courses/Utils/LandingWave';


export default function Landing() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Statues} className="image-course-surya-kriya-right" />
            </div>

            <LandingWave
                data={{
                    title: "Bhastrika Kriya",
                    subtitle: "Utilizing Breath",
                    description: 'Bhastrika Kriya is a powerful kriya, which purifies the blood and increases lung capacity. It can be of assistance to people with asthma, allergy, sinusitis, hormonal imbalance and skin disease.',
                    quote: "Generally, most human beings are breathing somewhere between 12 to 15 times per minute. They use less than 20% of their lung capacity during normal breathing. If your lung capacity expands, the number of breaths per minute during normal breathing naturally comes down, without you controlling it."
                }} />
        </div>
    )
}
