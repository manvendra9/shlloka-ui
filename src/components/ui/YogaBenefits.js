import React from 'react'
import LeftQuote from "../../images/svg/left-quote.svg";
import RightQuote from "../../images/svg/right-quote.svg";
import Divider from './Divider';

import ImageYogaBeneifits from "../../images/png/image-yoga-benifits.png";
import Globe from "../../images/png/globe.png";
import Wave from "../../images/svg/background-wave-4.svg";
import Wave4 from '../utils/background/Wave4';


export default function YogaBenefits() {

    return (
        <div>
            <Wave4 />

            <section>
                <h2 className="text-center">Benefits of Classical Hatha Yoga</h2>
                <div className="text-center">
                    <Divider className="center-horizontal" />
                </div>
                <div className="text-center">
                    <img src={ImageYogaBeneifits} className="yoga-benifits" />
                </div>

                <div className="container-flex-row">

                    <img className="item-flex-row image-globe" src={Globe} />

                    <div className="item-flex-row">
                        <h2 className="text-global-presence">GLOBAL PRESENCE</h2>
                        <p>Shlloka and her team conduct Workshops, Retreats and Events globally. Providing Classical Tools of Wellbeing and Wisdom, for people to move towards their conscious and blissful nature. These events are organized across popular cities in India like Bangalore, Delhi, Mumbai and the Exotic location of Ladakh. Also overseas in UAE- Dubai and Abu-Dhabi. Shlloka regularly collaborates with institutions like Fortis, All India Institute of Medical Sciences (AIIMS), Wockhardt Foundation, DLF and Dusit Thani Dubai. Shlloka’s events have been graced by eminent personalities from a wide range of professions; The heads of Military, Media heads, Bollywood personalities, Corporate Heads, Medical Professionals and Social Media Figures.
                        </p>
                    </div>
                </div>

                <div className="container container-flex-row">
                    <img src={LeftQuote} className="icon-quote-left" />
                    <div className="container-flex-row">
                        <p className="quotes">"If you have mastery over your physical body, 15 to 20% of your life and destiny will be in your hands. If you have mastery over your mind, 50 to 60% of your life and destiny will be in your hands. If your have mastery over your very life energy, 100% of your life and destiny will be in your hands." - <b>Sadhguru</b></p>
                    </div>
                    <img src={RightQuote} className="icon-quote-right" />
                </div>

            </section>

        </div>
    )
}
