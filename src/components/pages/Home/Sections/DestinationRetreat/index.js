import React from 'react'
import "./style.css"
import ImageDestinationRetreatCourse from "../../../../../images/png/image-destination-retreat.png";

import Wave from "../../../../../images/svg/background-wave-4.svg";


export default function DestinationRetreat() {

    return (
        <div>
            <img src={Wave} className="wave-destination-retreat" />

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={ImageDestinationRetreatCourse} className="image-destination-retreat" />
                    </div>
                    <div className="container-text-destination-retreat">
                        <h2>Adults Destination Retreat</h2>
                        <button>Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
