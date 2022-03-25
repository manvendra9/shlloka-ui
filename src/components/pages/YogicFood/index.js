import React from 'react'

import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import VideoAboutProgram from './Sections/VideoAboutProgram'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Landing from './Sections/Landing'
import TotalParticipants from '../Utils/TotalParticipants'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Testimonial from '../../ui/Testimonials'
import Wave from "./image-wave3.png";
import ListTestinomial from '../../lists/ListTestinomial'

import "./style.css"


export default function YogicFood() {
    return (
        <div>
            <Landing />
            <VideoAboutProgram />
            <About />
            <ProgramTakeaway />
            <TotalParticipants data={{ image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTotalParticipants%2Fimage-yogic-food-participants.png?alt=media&token=eec751ee-98c2-47e7-ac95-c2acfe45368c" }} />

            <section>
                <ListTestinomial data={
                    [
                        {
                            text: "I felt a massive massive difference in the amount of activity I could do and how conscious I was about everything  around me. I just felt more alive, if that makes any sense. I just felt like I had way much more exuberant energy and I thank you.",
                            name: "Prabhjot singh Gill, Mississauga",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2FScreenshot_20210212-220153_Samsung%20Notes%20-%20P%20Gill.jpg?alt=media&token=8212753f-b2da-4020-a656-8188fd0e4d3a"
                        },
                    ]}
                />
            </section>

            <RegistrationDetails />

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave} className="image-course-yogic-food-wave3" />
                </div>
                <Benefits />
            </div>

            <Testimonial />
            <VideoTestimonial />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=9aAzFTQOJJU" />
            <Gallery />
        </div>
    )
}
