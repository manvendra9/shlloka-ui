import React, { useEffect } from 'react';
import ItemCourse from '../../items/ItemCourse';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

var Carousel = require('react-responsive-carousel').Carousel;


export default function ListOnlineCourses(props) {

    const [centerSlidePercentage, setCenterSlidePercentage] = React.useState(50);
    const [list, setList] = React.useState([]);

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setCenterSlidePercentage(50);
        } else if (window.innerWidth >= 600) {
            setCenterSlidePercentage(90);
        } else {
            setCenterSlidePercentage(80);
        }
    }

    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        setList(props.data)
    }, []);

    // if (props.data) {
    //     if (props.data.length === 0) {
    //         return <div />
    //     }

    return (
        <Carousel
            centerMode={true}
            centerSlidePercentage={centerSlidePercentage}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
        >
            {list.map(item => (
                <ItemCourse data={item} />
            ))}
        </Carousel>
    )
}