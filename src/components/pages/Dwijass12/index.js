import React from 'react'
import Gallery from '../../ui/Gallery'
import Quote from '../Utils/Quote'
import TotalParticipants from '../Utils/TotalParticipants'
import About from './Sections/About'
import Benefits from './Sections/Benefits'
import Details from './Sections/Details'
import Feedbacks from './Sections/Feedbacks'
import ProgramTakeaway from './Sections/Takeaway'
import Testimonial from './Sections/Testimonial'
import Title from './Sections/Title'
import VideoAboutProgram from './Sections/VideoAboutProgram'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'


export default function Dwijass12() {
    
    return (
        <div>
            <Title/>
            <VideoAboutProgram />
            <About/>
            <ProgramTakeaway/>
            <TotalParticipants data={{image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTotalParticipants%2Fimage-dwijass12-participants.png?alt=media&token=e306c70e-e9e0-4c13-afe9-47af4d631f12"}} />
            <Feedbacks />

            <div>
                <Register guidlines={[
                    "Age criteria - Adults & 14+ year olds",
                    "Anyone who has had major open surgery within the last 6 months",
                    "Precautions - Not allowed for women in the 4th & 5th month of pregnancy"
                ]}/>
            </div>
           
            <Benefits/>
            <Testimonial/>
            <VideoTestimonial/>
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery/>
        </div>
    )
}
