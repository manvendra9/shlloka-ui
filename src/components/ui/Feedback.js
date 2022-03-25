import React from 'react'
import Feedback1 from "../../images/png/feedback1.png";
import Feedback2 from "../../images/png/feedback2.png";
import Feedback3 from "../../images/png/feedback3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Patanjali from '../utils/background/Patanjali';

var Carousel = require('react-responsive-carousel').Carousel;



export default function Feedback() {

    const onChange = () => {

    }

    const onClickItem = () => {

    }

    const onClickThumb = () => {

    }

    return (
        <div>
            <Patanjali/>
            <section>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    onChange={onChange}
                    onClickItem={onClickItem}
                    onClickThumb={onClickThumb}
                >
                    <div>
                        <img src={Feedback1} />
                    </div>
                    <div>
                        <img src={Feedback3} />
                    </div>
                    <div>
                        <img src={Feedback2} />
                    </div>
                </Carousel>
            </section>
        </div>
    )
}
