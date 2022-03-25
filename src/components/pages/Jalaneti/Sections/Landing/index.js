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
                    title: "Jalaneti",
                    subtitle: "Respiratory Health",
                    description: 'This is a simple but effective process of cleansing the Nasal passages with salt water, using a copper Jala Neti pot. The process makes breathing easier by helping air enter the lungs, unimpeded by mucus and dirt that build up through the day.',
                    quote: "Neurologically, it brings a certain dynamism and at the same time, a certain tranquility. If you are hyper, it brings you down and now that you are not jumpy anymore, a whole lot of things happen, a series of cascading effects. Medically, one can experience all the benefits of a person whose nerves are calm."
                }} />
        </div>
    )
}
