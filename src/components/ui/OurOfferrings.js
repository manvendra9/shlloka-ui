import React from 'react'
import ListOnlineCourses from '../lists/ListOnlineCourses';
import Index2 from '../lists/ListOnlineCourses';
import Divider from '../utils/Divider';

export default function OurOfferrings() {

    return (
        <div className="section-no-padding-horizontal">
            <h2 className="text-center">Our Offerings</h2>

            <div className="container">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3 className="text-online-course">Online Courses</h3>
                    <Divider />
                </div>
                <div>
                    <Index2 />
                </div>
            </div>

            <div className="container">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                    <Divider />
                    <h3 className="text-offline-course">In-Person / Offline Courses</h3>
                </div>

                <div>
                    <Index2 />
                </div>
            </div>
        </div>
    )
}
