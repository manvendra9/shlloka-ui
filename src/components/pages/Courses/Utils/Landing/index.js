import React from 'react'

import "./style.css"

export default function ContainerLanding(props) {

    return (
        <section>
            <div>
                <div className="container-course-title">
                    <img src={props.data.title} className="image-course-title" />
                </div>
                <div style={{ position: "relative" }}>
                    <hr style={{ maxWidth: 480 }} />
                    <p className="course-about">{props.data.about}</p>
                </div>
            </div>

            <div className="text-center">
                <button>Register and Pay</button>
            </div>

            <div className="container-course-quote">
                <p className="p-italic"><b>"{props.data.quote}"</b></p>
                <div style={{ fontSize: 18 }}><b>-SADHGURU</b></div>
            </div>
        </section>
    )
}
