import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Testimonial from './Sections/Testimonial'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'

import Wave from "./Images/image-wave4.png";


export default function BhastrikaKriya() {

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
                   "Women who are currently pregnant",
                   "Anyone who has had a major open surgery within the last 6 months",
                   "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks",
                   "As a general note, always consult and follow your doctor’s advice."
                   
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
