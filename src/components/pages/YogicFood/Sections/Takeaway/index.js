import React from 'react'
import Divider from '../../../../ui/Divider';
import Image from "./Images/image-yogic-food-takeaway.png";
import ImageParticipants from "./Images/image-yogic-food-participants.png"

import ImagePeople from "./Images/image-people.png"


import "./style.css"

export default function ProgramTakeaway() {
    return (
        <div>
              <div style={{ position: "relative" }}>
                <img src={ImagePeople} className="image-course-yogic-food-people2 " />
            </div>
            <section>
                <h2 className="text-center">Program Takeaway</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={Image} className="image-yogic-food-takeaway" />
                </div>
            </section>
        </div>
    )
}
