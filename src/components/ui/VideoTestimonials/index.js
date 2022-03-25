import React from 'react'
import Divider from '../Divider'
import Video from '../Video'


export default function VideoTestimonial() {

    return (
        <div>
            <section>
                <h2 className="text-center">Video Testimonials</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=9aAzFTQOJJU" }} />
            </section>
        </div>
    )
}
