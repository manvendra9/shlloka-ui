import React from 'react'
import Yogini from "../../images/png/image-yogini.png";
import Wave1 from '../utils/background/Wave1';

export default function Landing() {
    return (
        <div>
            <Wave1/>
            <section>
                <div className="container-flex-row">
                    <div className="item-flex-row">
                        <h1 className="h1-secondary">SHLLOKA</h1>
                        <p className="p-secondary">Isha Hatha Yoga Teacher, extensively trained under Sadhguru's guidance - The celebrated Mystic and Yogi</p>
                        <button>Click here</button>
                    </div>
                    <img className="item-flex-row yogini" src={Yogini} />
                </div>
            </section>
        </div>
    )
}
