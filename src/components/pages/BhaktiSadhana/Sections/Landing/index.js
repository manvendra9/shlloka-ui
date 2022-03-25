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
                    title: "Bhakti Sadhana",
                    subtitle: "Learn to be Devoted",
                    // description: "Surya Kriya is a 21 step yogic practice of tremendous antiquity designed as a holistic process for health, wellness and complete inner wellbeing.",
                    quote: "Devotion is the highest form of intelligence. When you overflow with the sweetness of Devotion, then you function at your best."
                }} />
        </div>
    )
}
