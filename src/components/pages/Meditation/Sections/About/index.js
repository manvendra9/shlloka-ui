import React from 'react'
import Wave from "./Images/image-wave2.png"
import Image1 from "./Images/image-about1.png";

import Leaf from "../../../Courses/Images/image-leaf2.png";

import "./style.css";


export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-bhuta-shuddhi-wave2" />
            </div>

            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-bhastrika-kriya-leaf" />
            </div>

            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image1} className="image-course-about-bhuta-shuddhi" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">One aspect of Upa-yoga is towards activating the lubricants and energy nodes in the joints so that the rest of the system begins to function.</p>
                        <p className="p-italic">Within the human system, the energy flows along 72,000 pathways called nadis. At the joints, the nadis meet and form nodes, making the joints storehouses of energy. Upa-yoga activates this energy and also lubricates the joints, creating an instant sense of alertness and liveliness.</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}