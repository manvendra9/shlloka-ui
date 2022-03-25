import React from 'react'
import Image from "./Images/image-dwijass21-about.png";
import Wave from "./Images/image-wave3.png"

import "./style.css";

export default function About() {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass21-wave3" />
            </div>
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-dwijass12" />
                    </div>
                    <div className="container-text-course-about-dwijass12">
                        <p className="p-italic">Within the human system, the energy flows along 72,000 pathways called nadis. At the joints, the nadis meet and form nodes, making the joints storehouses of energy. Upa Yoga activates this energy and also lubricates the joints, creating an instant sense of alertness and liveliness.</p>
                        <p className="p-italic">The practices that are taught are simple and complete processes by themselves, offering all round benefits for the entire body, especially the spine.</p>
                        <p className="p-italic">The meditations offered in the program have the potential to transform the life of anyone who is willing to invest just a few minutes a day. How we organize and focus our minds will decide the direction our life flows. These meditations enable the power of the mind to create what one wants in his life.</p>
                        <p className="p-italic">This program also offers an opportunity to explore the yogic lifestyle so that every activity that you do can become a process for your well-being, if you approach it the right way.</p>

                        <ul className="ul-arrow">
                            <li>Upa Yoga</li>
                            <li>Yoga Namaskar</li>
                            <li>Pranayam</li>
                            <li>Meditations</li>
                            <li>Nada Yoga</li>
                            <li>Immunity building practices</li>
                            <li>Lifestyle Tips</li>
                            <li>Sadhguru’s Recorded Discourses</li>
                        </ul>
                        <button>Register and Pay</button>
                    </div>
                </div>
            </section>
        </div>
    )
}