import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import Gallery from '../../ui/Gallery'
import Testimonial from './Sections/Testimonial'
import BestTestimonial from './Sections/BestTestimonial'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'

import LandingWave from '../Courses/Utils/LandingWave'

import Wave1 from "./Images/image-wave1.png";
import Wave3 from "./Images/image-wave3.png";
import Wave4 from "./Images/image-wave4.png";
import Wave5 from "./Images/image-wave5.png";

import Statue1 from "./Images/image-statue1.png";
import Statue2 from "./Images/image-statue2.png";

import Benefits from "./Images/image-benefits.png";

import "./style.css";
import Divider from '../../ui/Divider'

export default function Meditation() {

    return (
        <div>
            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave1} className="image-course-surya-kriya-wave" />
                </div>
                <div style={{ position: "relative" }}>
                    <img src={Statue1} className="image-course-surya-kriya-right" />
                </div>
                <LandingWave
                    data={{
                        title: "Meditation",
                        subtitle: "Going beyond",
                        description: 'Meditation means to know and experience life beyond the physical sphere; not on the surface but at the source.',
                        quote: "Meditation is not about going somewhere - it's falling back to yourself."
                    }} />
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Statue2} className="image-course-upa-yoga-statue2" />
                </div>

                <ProgramTakeaway />
            </div>

            <BestTestimonial />

            {/* <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave3} className="image-course-upa-yoga-wave3" />
                </div>
                <Register guidlines={[
                    "Not suitable for",
                    "Pregnant Women",
                    "People with an active hernia",
                    "Anyone who has had major open surgery within the last 6 months",
                    "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks"

                ]} />
            </div> */}

            <div>
                <section>
                    <h2 className="text-center">Benefits of Meditation</h2>
                    <div className="text-center">
                        <Divider className="center-horizontal" />
                    </div>
                    <div className="text-center">
                        <img src={Benefits} className="yoga-benifits" />
                    </div>
                </section>
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave4} className="image-course-upa-yoga-wave4" />
                </div>
                <Testimonial />
            </div>

            <VideoTestimonial />

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave5} className="image-course-upa-yoga-wave5" />
                </div>
                <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            </div>
            <Gallery />
        </div>
    )
}
