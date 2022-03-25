import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import Divider from '../../../../../utils/Divider';

import Leaf1 from "../../../Images/image-leaf1.png";
import Leaf2 from "../../../Images/image-leaf2.png";
import Video from '../../../Utils/Video';


import "./style.css"

export default function SectionVideo(props) {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Leaf1} className="image-course-dwijass12-leaf1" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Leaf2} className="image-course-dwijass12-leaf2" />
            </div>
            <section>
                <div className="container-flex-row">
                    <h2>About the Program by Shlloka</h2>
                    <Divider />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=u9BuQFQr2zE" }} />
            </section>
        </div>
    )
}
