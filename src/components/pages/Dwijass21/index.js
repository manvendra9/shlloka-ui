import React from 'react'
import About from './Sections/About'
import ProgramTakeaway from './Sections/Takeaway'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Feedbacks from './Sections/Feedbacks'
import SectionVideo from './Sections/Video'
import Landing from './Sections/Landing'
import TotalParticipants from '../Utils/TotalParticipants'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonials from "../../ui/VideoTestimonials"
import Testimonial from '../../ui/Testimonials'
import Register from '../../ui/Register'


export default function Dwijass21() {
    return (
        <div>
            <Landing />
            <SectionVideo data={{ title: "About the program by Shlloka", link: "https://www.youtube.com/watch?v=7sDY4m8KNLc" }} />
            <About />
            <ProgramTakeaway />
            <TotalParticipants data={{ image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTotalParticipants%2Fimage-dwijass12-participants.png?alt=media&token=e306c70e-e9e0-4c13-afe9-47af4d631f12" }} />
            <Feedbacks />
            <Register guidlines={[
                "Age criteria - Adults & 14+ year olds",
                "Anyone who has had major open surgery within the last 6 months",
                "Precautions - Not allowed for women in the 4th & 5th month of pregnancy"
            ]} />

            <Benefits />
            <Testimonial />
            <VideoTestimonials />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery />
        </div>
    )
}
