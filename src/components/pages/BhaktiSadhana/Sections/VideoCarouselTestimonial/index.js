import React from 'react'
import Divider from '../../../../ui/Divider'
import Video from '../../../../ui/Video'

export default function VideoCarouselTestimonial() {

    return (
        <div>
            <section>
                <h2 className="text-center">Video Carousel Testimonials</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=SukisKJve7o" }} />
            </section>
        </div>
    )
}
