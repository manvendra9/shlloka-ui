import React from 'react'
// import Yogini from "../../images/png/image-yogini.png";
import Wave from './Images/image-wave1.png';
import Statues from "./Images/image-statues.png"
import LandingWave from '../../../Courses/Utils/LandingWave';

import "./style.css"

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
                    title: "DWIJASS",
                    subtitle: "21 Days Online Intensive Upa Yoga Program",
                    description: 'Yoga & Wellness Program Designed By Sadhguru and offered live by An Isha Hatha Yoga Teacher - Shlloka',
                    quote: "Spiritual Practice is like food. Food only works for those who eat it. Spiritual practice only works for those who do it"
                }} />

        </div>
    )
}
