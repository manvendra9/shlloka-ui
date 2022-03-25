import React, { useEffect } from 'react'
import Divider from '../../../../ui/Divider';

import Video from '../../../../ui/Video';


export default function KnowFromSadhguru(props) {

    return (
        <div>
            <section>
                <div className="container-flex-row">
                    <h2>Know more from <b>Sadhguru</b></h2>
                    <Divider />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=9aAzFTQOJJU" }} />
            </section>
        </div >
    )
}
