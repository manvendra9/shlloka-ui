import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Testimonial from './Sections/Testimonial'
import BestTestimonial from './Sections/BestTestimonial'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'

import Wave from "./Images/image-wave4.png";
import LandingWave from '../Courses/Utils/LandingWave'

import Wave1 from "./Images/image-wave1.png";
import Wave3 from "./Images/image-wave3.png";
import Wave4 from "./Images/image-wave4.png";
import Wave5 from "./Images/image-wave5.png";

import Statue1 from "./Images/image-statue1.png";
import Statue2 from "./Images/image-statue2.png";

import Leaf from "../Courses/Images/image-leaf2.png";
import ImageSadhguru1 from "./Images/image-sadhguru1.png"
import Image3 from "./Images/image3.png"
import ImageSadhguru2 from "./Images/image-sadhguru2.png"


import "./style.css";
import Divider from '../../ui/Divider'
import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { padding } from '@mui/system'

export default function AboutSadhguru() {

    return (
        <div>
            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave1} className="image-course-surya-kriya-wave" />
                </div>
                <div style={{ position: "relative" }}>
                    <img src={Statue1} className="image-course-surya-kriya-right" />
                </div>
                <LandingWave
                    data={{
                        title: "Sadhguru",
                        subtitle: "Sadhguru is a Yogi and a Mystic",
                        description: "A man whose passion spills into everything he encounters. Named one of India's 50 most influential people, Sadhguru's work has touched the lives of millions worldwide through his transformational programs.",
                        quote: "A Guru is a presence, not a person. To make use of this energy and possibility, all you have to do is become an opening."
                    }} />
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Leaf} className="image-about-sadhguru-leaf" />
                </div>
            </div>

            <div>
                <section>
                    {/* <Card variant="outlined"> */}
                        <Grid container spacing={2}>
                            <Grid item sx={12} sm={6} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={ImageSadhguru1}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                            <Grid item sx={12} sm={6} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <p>Sadhguru has a unique ability to make the ancient yogic sciences relevant to contemporary minds, acting as a bridge to the deeper dimensions of life.His approach does not ascribe to any belief system, but offers methods for self-transformation that are both proven and powerful.</p>
                                    <p><b>An author, poet, visionary</b></p>
                                    <p>An internationally renowned speaker and bestselling author, Sadhguru has been an influential voice at major global forums including the <b>United Nations World</b> Headquarters and the World Economic Forum, addressing issues as diverse as socioeconomic development, leadership and spirituality.He has also been invited to speak at leading educational institutions, including <b>Oxford, London Business School, IMD, Stanford, Harvard, Yale, Wharton and MIT</b>, to  name a few.</p>
                                </div>
                            </Grid>
                        </Grid>
                    {/* </Card> */}
                </section>
            </div>

            <div>
                <section>
                    {/* <Card variant="outlined"> */}
                        <Grid container spacing={2} >

                            <Grid item sx={12} sm={6} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <p><b>Sadhguru is also the founder of Isha Foundation, a non-profit organization which has been dedicated to the wellbeing of the individual and the world for the past three decades. Isha Foundation does not promote any particular ideology, religion, or race, but transmits inner sciences of universal appeal. www.ishafoundation.org</b></p>
                                    <p><b>Under Sadhguru’s leadership, Isha Foundation has also shaped many pioneering and large-scale social initiatives like quality education for the poor, holistic health solutions, environmental stewardship, and bringing about rural rejuvenation through sports. This approach has gained worldwide recognition and reflects in Isha Foundation’s special consultative status with the Economic and Social Council of the United Nations.</b></p>
                                </div>
                            </Grid>

                            <Grid item sx={12} sm={6} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={Image3}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                        </Grid>
                    {/* </Card> */}
                </section>
            </div>

            <div>
                <section>
                    {/* <Card variant="outlined"> */}
                        <Grid container spacing={2} >
                            <Grid item sx={12} sm={6} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={ImageSadhguru2}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                            <Grid item sx={12} sm={6} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <p>Isha Foundation is run entirely by volunteers inspired by their own personal transformation. Sadhguru has emphasized that humanity now has the necessary capability and resources to address every problem on the planet; the only missing element is willingness. Sadhguru has kindled this willingness within millions of people to extend their heads, hands, and hearts toward the betterment of humanity.</p>
                                    <p>Isha foundation is supported by over <b>7 million volunteers in over 250 centers worldwide</b>. Sadhguru presents yoga – the core of India’s spiritual strength and its gift to the world – as an inner science. Devised by Sadhguru, Inner Engineering or Isha Yoga has made a dimensional shift in how people address their wellbeing.</p>
                                </div>
                            </Grid>
                        </Grid>
                    {/* </Card> */}
                </section>
            </div>

            <div>
                <section>
                    <h2 className="text-center">Media Coverage</h2>
                    <div className="text-center">
                        <Divider className="center-horizontal" />
                    </div>
                </section>
            </div>
        </div >
    )
}
