import React from 'react'
import ContainerLanding from '../../../Courses/Utils/Landing';

import "./style.css";

export default function Title() {

    return (
        <div>
            <div className="container-course-dwijass12-bakground-images">
                <img src="https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FCourses%2FDwijass12%2FLanding%2Fbackground-image-left.png?alt=media&token=97d1e94d-9f21-4559-9bea-9cb1ceed3ecf"
                    className="image-course-dwijass12-background-image-left" />
                <img src="https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FCourses%2FDwijass12%2FLanding%2Fbackground-image-right.png?alt=media&token=79771201-dca9-409a-aee2-5820336628fc"
                    className="image-course-dwijass12-background-image-right" />
            </div>

            <ContainerLanding data={{
                title: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FCourses%2FDwijass12%2FLanding%2Ftitle.png?alt=media&token=7c669d1a-6da4-4597-b3a4-aec48776fda2",
                about: "Yoga and Wellness Program Designed By Sadhguru and offered live by Isha Hatha Yoga Teacher - Shlloka",
                quote: "Yoga is about attaining absolute balance, piercing clarity, and an inexhaustible exuberance. With this, you are immensely fit for life."
            }} />
        </div>
    )
}
