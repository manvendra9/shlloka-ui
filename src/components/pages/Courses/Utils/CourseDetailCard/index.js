import React from 'react'
import Divider from '../../../../ui/Divider'

import "./style.css"

export default function CourseDetailCard(props) {
    return (
        <div className="container-card-course-detail">

            <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                <button className="button-register">Register Here</button>
                <Divider />
            </div>

            <div className="container-flex-row">

                <div className="container-card-course-detail2">
                    <h3><b>Date and Time:</b></h3>
                    <ul style={{ marginTop: 10 }}>
                        <li className="course-detail-text">
                            May 21 to 23, 2021
                        </li>
                        <li className="course-detail-text">
                            4:30 to 7PM IST
                        </li>
                    </ul>

                </div>
                <div className="container-card-course-detail2">
                    <h3><b>Price:</b></h3>
                    <ul style={{ marginTop: 10 }}>
                        <li className="course-detail-text">
                            Rs 3600 per person
                        </li>
                        <li className="course-detail-text">
                            Rs 6000 per family
                        </li>
                        <li className="course-detail-text">
                            (2 or more family members from same location and same login)
                        </li>
                    </ul>
                </div>
                <div className="container-card-course-detail2">
                    <h3><b>Venue:</b></h3>
                    <ul style={{ marginTop: 10 }}>
                        <li className="course-detail-text">
                            It will be a live class on Zoom
                        </li>
                        <li className="course-detail-text">
                            Login details will be shared post-registration
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ padding: 10 }}>
                <span><b>Location: </b></span>
                <span>It will be live class on Zoom</span>
            </div>

            <div style={{ padding: 10 }}>
                <span><b>Guidlines: </b></span>
                <span>Age criteria - 14+ year</span>
            </div>

            <div style={{ padding: 10 }}>
                <span><b>Precautions: </b></span>
                <span>Not allowed for women in the 4th and 5th month of pregnancy</span>
            </div>

            <div style={{ padding: 10 }}>
                <span><b>15 days support group: </b></span>
                <span>+91 - 6366852888</span>
            </div>
        </div>
    )
}
