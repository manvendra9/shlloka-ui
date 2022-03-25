import React from 'react'

import "./style.css";

export default function TotalParticipants(props) {
    return (
        <section>
            <div className="text-center">
                <img src={props.data.image} className="image-participants" />
            </div>
        </section>
    )
}
