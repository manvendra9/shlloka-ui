import React from 'react'
import SampleCourse from "../../../images/png/sample-course.png"

import "./itemCourse.css";

export default function ItemCourse(props) {

    // return(
    //     <div style={{background:"gold", width:200, height:200, }}>A</div>
    // )
    
    return (
        <div className="card-course">
            <div className="image-card-course">
                <img className="image-card-course" src={props.data.image} />
            </div>
            <div className="container-content-card-course">
                <div className="container-text-card-course">
                    <div style={{ fontSize: 18 }}>{props.data.name}</div>
                    <p>{props.data.description}</p>
                </div>
                <button>Learn more</button>
            </div>
        </div>
    )
}
