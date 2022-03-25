import React from 'react'
// import Yogini from "../../images/png/image-yogini.png";
import Wave from './Images/image-wave1.png';
import Statues from "./Images/image-statue.png"

import "./style.css"
import LandingWave from '../../../Courses/Utils/LandingWave';

export default function Landing() {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-shakti-wave" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Statues} className="image-course-surya-shakti-right" />
            </div>

            <LandingWave
                data={{
                    title: "Surya Shakti",
                    subtitle: "Fitness",
                    description: "Surya Shakti is to energize the system to a different dimension. This 18 step process helps to strengthen the ligaments that hold the skeletal and muscular structure together.",
                    quote: "A human being can withstand planetary movements and celestial influences to some extent. But no one can be absolutely free from the impact of these processes. It is the potter's wheel of the solar system that has constructed the human system."
                }} />
        </div>
    )
}
