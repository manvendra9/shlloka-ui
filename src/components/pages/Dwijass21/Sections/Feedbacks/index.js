import React from 'react'
import Carousel from '../../../Courses/Utils/Carousel'
import Wave from "./Images/image-wave4.png";

import "./style.css"

export default function Feedbacks() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass21-wave4" />
            </div>
            <section>
                <Carousel data={{
                    images: [
                        "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FFeedbacks%2FGroup%201070.png?alt=media&token=fac04419-2dde-48b1-895f-936e3ac6f9a2",
                        "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FFeedbacks%2FGroup%201071.png?alt=media&token=76ef44ad-1146-419b-923d-45c372fb407f",
                        "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FFeedbacks%2FGroup%20845.png?alt=media&token=7dcf015e-0a17-45e7-bf77-cb564810547e"
                    ]
                }} />
            </section>
        </div>
    )
}
