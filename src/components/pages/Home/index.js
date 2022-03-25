import React from 'react'
import Gallery from '../../ui/Gallery'
import Landing from '../../ui/Landing'
import Courses from './Sections/Courses'
import YogaBenefits from '../../ui/YogaBenefits'
import Testinomials from '../../ui/Testinomials'
import Feedback from '../../ui/Feedback'
import DestinationRetreat from './Sections/DestinationRetreat'
import CorporatePrograms from './Sections/CorporatePrograms'
import ChildrenPrograms from './Sections/ChildrenPrograms'
import Testimonial from './Sections/Testimonial'
import WhatIsYoga from './Sections/WhatIsYoga'
import TotalParticipants from '../Utils/TotalParticipants'

import Participants from "./Images/image-participants.png";

export default function Home() {
    return (
        <div>
            <Landing />
            <Feedback />
            <Courses />
            <DestinationRetreat />
            <ChildrenPrograms />
            <CorporatePrograms />
            <Testinomials />
            <Testimonial />
            <WhatIsYoga />
            
            <section>
                <div className="text-center">
                    <img src={Participants} className="image-participants" />
                </div>
            </section>

            <YogaBenefits />
            <Gallery />
        </div>
    )
}
