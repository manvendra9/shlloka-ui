import React from 'react'
import SampleCourse from "../../images/png/sample-course.png"


export default function ItemGalleryImage() {
    return (
        <div style={{overflow: "hidden" }}>
            <img src={SampleCourse} style={{ width: "auto", height: "100%", }} />
        </div>
        // <div style={{ background: "gold" }}>
        //     Blank Image
        // </div>
    )
}
