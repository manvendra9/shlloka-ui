import React from 'react'

import "./style.css";


export default function LandingWave(props) {

    return (
        <div>
            <section>
                <div>
                    <div className="container-course-wave-title">
                        <h1 className="h1-secondary">{props.data.title}</h1>
                    </div>

                    <div className="div-secondary" style={{ fontSize: 18 }}><b>{props.data.subtitle}</b></div>
                    <p className="p-secondary course-wave-subtitle">{props.data.description}</p>
                    <button>Register</button>
                </div>
            </section>

            <div className="container-course-wave-quote">
                <p className="p-italic"><b>"{props.data.quote}"</b></p>
                <div style={{ fontSize: 18 }}><b>-SADHGURU</b></div>
            </div>
        </div>

    )
}
