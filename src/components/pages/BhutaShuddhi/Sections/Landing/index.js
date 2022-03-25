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
                    title: "Bhuta Shuddhi",
                    subtitle: "Ultimate Cleansing",
                    description: 'Bhuta Shuddhi means “purification of the elements,” and is a process of purifying the 5 elements within the human system.',
                    quote: "If the five elements are in your control, the whole life process – birth, living, and dying – is 100% in your control."
                }} />
        </div>
    )
}
