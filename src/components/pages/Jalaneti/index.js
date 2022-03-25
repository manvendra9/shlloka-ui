import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Testimonial from '../../ui/Testimonials'

import Register from "../../ui/Register";


export default function Jalaneti() {
    return (
        <div>
            <Landing />
            <About />
            <ProgramTakeaway />
            <BestTestimonial />
            <Register guidlines={[
                "This programme is open to ages 14 and above.",
                "Anyone who has had a major open surgery within the last 6 months"
            ]}/>
            <Benefits />
            <Testimonial />
            <VideoTestimonial/>
            <KnowFromSadhguru  link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery />
        </div>
    )
}
