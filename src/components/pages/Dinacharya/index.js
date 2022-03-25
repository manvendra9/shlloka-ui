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
import Wave2 from "./Images/image-wave2.png";
import Wave3 from "./Images/image-wave3.png";
import Wave4 from "./Images/image-wave4.png";
import Wave5 from "./Images/image-wave5.png";

import Statue1 from "./Images/image-statue1.png";
import Statue2 from "./Images/image-statue2.png";

import Benefits from "./Images/image-benefits.png";

import "./style.css";
import Divider from '../../ui/Divider'

export default function Dinacharya() {

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
                        title: "Dincharya",
                        subtitle: "Yogic Lifestyle Program",
                        description: 'The Dincharya program offers an opportunity to explore the Yogic lifestyle and all aspects of life right from how you wake up, how you bathe, how you eat, how you drink, how you speak, what to wear, when to sleep, how to sleep, and every aspect, so your life can be made as a device or tool for your ultimate wellbeing.',
                        quote: "Everything can be sadhana. The way you eat, the way you sit, the way you stand, the way you breathe, the way you conduct your body, mind and your energies and emotions – this is sadhana. Sadhana does not mean any specific kind of activity, sadhana means you are using everything as a tool for your wellbeing."
                    }} />
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave2} className="image-course-dinacharya-wave2" />
                </div>
                <About />
            </div>

            <div>
            <div style={{ position: "relative" }}>
                    <img src={Wave3} className="image-course-dinacharya-wave3" />
                </div>
                <ProgramTakeaway />
            </div>

            <BestTestimonial />

            <div>
                <Register guidlines={[
                    "Not suitable for",
                    "Pregnant Women",
                    "People with an active hernia",
                    "Anyone who has had major open surgery within the last 6 months",
                    "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks"

                ]} />
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Statue2} className="image-course-dinacharya-statues2" />
                </div>
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
                <section>
                    <p className="p-italic"><b>When we say sadhana, we are not talking about any particular aspect. We are talking about using every aspect of life – both internal and external – so that it is a continuous nurturing for your life. Because the very nature of a human being is such, unless there is some dynamism, some movement in his life towards betterment within and outside of himself, he will feel frustrated. He has to keep moving to a newer and newer possibility.</b></p>
                </section>
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave4} className="image-course-dinacharya-wave4" />
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
