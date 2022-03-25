import React, { useEffect } from 'react'
import Divider from '../Divider';

import Video from '../Video';


export default function KnowFromSadhguru(props) {

    return (
        <div>
            <section>
                <div className="container-flex-row">
                    <h2>Know more from <b>Sadhguru</b></h2>
                    <Divider />
                </div>
                <Video data={{ link: props.link }} />
            </section>
        </div >
    )
}
