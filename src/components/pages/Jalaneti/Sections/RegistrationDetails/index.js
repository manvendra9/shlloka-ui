import React from 'react'
import CourseDetailCard from '../../../Courses/Utils/CourseDetailCard'

import Wave from "./Images/image-wave4.png"

import "./style.css"


export default function RegistrationDetails() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-jalaneti-wave4" />
            </div>

            <section>
                <CourseDetailCard />
            </section>
        </div>

    )
}
