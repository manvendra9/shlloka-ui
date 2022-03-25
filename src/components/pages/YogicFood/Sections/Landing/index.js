import React from 'react'
import ContainerLanding from '../../../Courses/Utils/Landing';

import ImageLeft from "./Images/image-left.png"
import ImageRight from "./Images/image-right.png"

import "./style.css";

export default function Landing() {

    return (
        <div>
            <div className="container-course-yogic-food-bakground-images">
                <img src={ImageLeft}
                    className="image-course-yogic-food-background-image-left" />
                <img src={ImageRight}
                    className="image-course-yogic-food-background-image-right" />
            </div>

            <ContainerLanding data={{
                title: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FCourses%2FYogicFood%2FLanding%2Ftitle.png?alt=media&token=43b885af-6e74-4d76-bcc8-318b614e4560",
                about: "A live session based on guidlines given by Sadhguru",
                quote: "Food is not a commodity - Food is life-making material."
            }} />
        </div>
    )
}
