import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const ReactCarousel = require('react-responsive-carousel').Carousel;


export default function Carousel(props) {

    return (
        <div style={{ listStyle: "none" }}
        >
            <ReactCarousel
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
            >
                {
                    props.data.images.map(item => <div><img src={item} /></div>)
                }
            </ReactCarousel>
        </div>
    )
}
