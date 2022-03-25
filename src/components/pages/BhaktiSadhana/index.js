import React from 'react'
import About from './Sections/About'
import ProgramTakeaway from './Sections/Takeaway'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Testimonial from './Sections/Testimonial'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'

import Wave from "./Images/image-wave4.png";

export default function BhaktiSadhana() {

    return (
        <div>
            <Landing />
            <About />
            <ProgramTakeaway />
            <BestTestimonial />
            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave} className="image-course-surya-kriya-wave4" />
                </div>
                <Register guidlines={[
                    "Not suitable for Women",
                    "People with an active Hernia",
                    "Anyone who has had a major open surgery within the last 6 months",
                    "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks",
                    "As a general note;  if in doubt, always consult and follow your doctor’s advice.",
                    "If you have any questions regarding your participation, please connect with us via the details in the description below.",
                    "Age Limit; Adults & 14+ yr children",
                    "Intensity - Low - Intensive"
                ]} />
            </div>
            <Benefits />
            <Testimonial />
            <VideoTestimonial />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery />
        </div>
    )
}
