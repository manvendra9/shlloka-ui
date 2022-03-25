import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Testimonials from '../../ui/Testimonials'


export default function Angamardana() {

    return (
        <div>
            <Landing />
            <About />
            <ProgramTakeaway />
            <BestTestimonial />
            <RegistrationDetails />
            <Benefits />
            <Testimonials />
            <VideoTestimonial />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=9aAzFTQOJJU" />
            <Gallery />
        </div>
    )
}
