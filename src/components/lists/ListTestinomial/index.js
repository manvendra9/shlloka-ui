import React from 'react'
import ItemTestinomial from '../../items/ItemTestinomial/index.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var Carousel = require('react-responsive-carousel').Carousel;

export default function ListTestinomial(props) {

    if (props.data) {
        if (props.data.length === 0) {
            return <div />
        }

        return (

            <Carousel
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
            >
                {props.data.map(item => (
                    <ItemTestinomial data={item} />
                ))}
            </Carousel>

        )
    }

    return <div />
}
