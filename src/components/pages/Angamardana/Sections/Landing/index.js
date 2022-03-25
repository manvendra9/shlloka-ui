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
                <img src={Wave} className="image-course-surya-kriya-wave" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Statues} className="image-course-surya-kriya-right" />
            </div>

            <LandingWave
                data={{
                    title: "Angamardana",
                    subtitle: "Yogic Gym",
                    description: "Angamardana is a series of 31 processes to invigorate the body and reach peak physical fitness and mental health.",
                    quote: "Angamardana is a powerful system to bring the human mechanism to ultimate health and wellbeing, and above all, to blossom into a full-fledged human being."
                }} />
        </div>
    )
}
