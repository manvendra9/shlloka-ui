import React from 'react'
import Image from "./Images/image-about-bhakti-sadhana.png";
import Image2 from "./Images/image-about-bhakti-sadhana2.png";
import Wave from "./Images/image-wave2.png"
import Leaf from "../../../Courses/Images/image-leaf2.png";


import "./style.css";

export default function About() {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave2" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Leaf} className="image-course-bhakti-sadhana-leaf" />
            </div>
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-course-about-bhakti-sadhana" />
                    </div>
                    <div className="container-course-description">
                        <p className="p-italic">Without devotion, Hatha yoga can be very counter productive, which means one could become just body oriented and farther away from the state of union that is Yoga. Sadhguru says, it is very important for a person walking the spiritual path to be blessed by the Universe. Even a blade of grass should bless them.</p>
                        <p className="p-italic">Consistent practice of Bhakti sadhana gently brings you in this state of devotion.</p>
                        <p className="p-italic">If you use your emotions and try to reach the ultimate, we call this bhakti yoga. That means the path of devotion.</p>
                        <p className="p-italic">Bhakti Yoga means using the intensity of one's emotion to transcend one's limitations.</p>
                        <p className="p-italic">We will incorporate this aspect in various sessions and treatment modules</p>
                        <button>Register and Pay</button>
                    </div>
                </div>
                <img src={Image2} className="image-course-about-bhakti-sadhana2" />
            </section>
        </div>
    )
}