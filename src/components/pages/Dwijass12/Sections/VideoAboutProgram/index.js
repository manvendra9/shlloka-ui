import React from 'react'
import Divider from '../../../../ui/Divider';

import Video from '../../../../ui/Video';


export default function VideoAboutProgram(props) {

    return (
        <div>
            <section>
                <div className="container-flex-row">
                    <h2>About the Program by <b>Shlloka</b></h2>
                    <Divider />
                </div>
                <Video data={{ link: "https://www.youtube.com/watch?v=u9BuQFQr2zE" }} />
            </section>
        </div >
    )
}
