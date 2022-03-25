import React from 'react'
import Wave from '../utils/background/Wave2'
import ImagePeopleFreeWebinar from "../../images/png/image-people-free-webinar.png";

import ListTestinomial from '../lists/ListTestinomial'


export default function Testinomials() {
    return (
        <div>
            <Wave />
            <section>
                <div className="container-flex-row">
                    <img src={ImagePeopleFreeWebinar} className="image-people-free-webinar" />
                    <div className="text-free-webinar">
                        <h2>Ask the Master</h2>
                        <h2>Free Webinar (online)</h2>
                        <button>Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
