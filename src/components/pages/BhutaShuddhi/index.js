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


export default function BhutaShuddhi() {

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
                    "Age Limit: Adults and 14 plus adolescents",
                    "Intensity - Low"
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
