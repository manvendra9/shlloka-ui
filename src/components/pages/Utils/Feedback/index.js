import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = require('react-responsive-carousel').Carousel;


export default function Feedback(props) {

    return (
        <div>
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
                    {
                        props.data.images.map(item => <div><img src={item} /></div>)
                    }
                </Carousel>
            </section>
        </div>
    )
}
