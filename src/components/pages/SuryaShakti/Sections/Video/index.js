import React, { useEffect } from 'react'
import Divider from '../../../../../utils/Divider';

// import Leaf2 from "../../../Images/image-leaf2.png";
import Video from '../../../Utils/Video';
// import Image from "./Images/image-wave2.png";




// import "./style.css"

export default function SectionVideo(props) {

    return (
        <div>
            {/* <div style={{ position: "relative" }}>
                <img src={Image} className="image-course-dwijass21-wave2" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Leaf2} className="image-course-dwijass12-leaf2" />
            </div> */}

            <section>
            <div className="container-flex-row">
                    <h2>To know more from <b>Sadhguru</b></h2>
                    <Divider />
                </div>
               <Video data={{link: "https://www.youtube.com/watch?v=u9BuQFQr2zE"}}/>
            </section>
        </div>
    )
}
