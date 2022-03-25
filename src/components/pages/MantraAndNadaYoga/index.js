import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Testimonial from './Sections/Testimonial'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Register from '../../ui/Register'

import Wave from "./Images/image-wave4.png";
import Divider from '../../ui/Divider'
import { Card, CardMedia, Grid, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Image1 from "./Images/image1.png"
import Image2 from "./Images/image2.png"
import Image3 from "./Images/image3.png"


export default function MantraAndNadaYoga() {

    return (
        <div>
            <Landing />
            <div>
                <section>
                    <h2 className="text-center">Mantra Yoga</h2>
                    <div className="text-center">
                        <Divider className="center-horizontal" />
                    </div>
                    <p className="text-center p-italic"><b>‘Mantra’ means sound. A few mantras or sounds have been identified, which could be like keys. If you use them in a certain way, they become a key to open up a different dimension of life and experience within you.</b></p>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant='outlined'>
                                <Grid container spacing={2} sx={{ padding: 1 }}>
                                    <Grid item sx={12} sm={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image={Image1}
                                            alt="Live from space album cover"
                                        />
                                    </Grid>
                                    <Grid item sx={12} sm={12} md={12} sx={{ minHeight: '20rem' }}>
                                        <div>
                                            <h3><b>Aumkar</b></h3>
                                            <p>The sound AUM is the very root of physical creation. The daily utterance of AUM creates balance and stability in your body and mind. The mantra activates and energizes the various sections of the body, reverberating through the whole system.</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}>
                                        <h4><b>READ MORE</b></h4>
                                        <ArrowForwardIcon style={{color: '#92A056'}} fontSize= 'large'/>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <button>Register</button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant='outlined'>
                                <Grid container spacing={2} sx={{ padding: 1 }}>
                                    <Grid item sx={12} sm={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image={Image2}
                                            alt="Live from space album cover"
                                        />
                                    </Grid>
                                    <Grid item sx={12} sm={12} md={12} sx={{ minHeight: '20rem' }}>
                                        <div>
                                            <h3><b>Brahmananda swaroopa</b></h3>
                                            <p>Brahman means boundless or the ultimate reality. Ananda means the blissfulness or ecstasy of the Creator, and Swaroopa is the form or image of the ecstasy of the Creator.</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}>
                                        <h4><b>READ MORE</b></h4>
                                        <ArrowForwardIcon style={{color: '#92A056'}} fontSize= 'large'/>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <button>Register</button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant='outlined'>
                                <Grid container spacing={2} sx={{ padding: 1 }}>
                                    <Grid item sx={12} sm={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image={Image3}
                                            alt="Live from space album cover"
                                        />
                                    </Grid>
                                    <Grid item sx={12} sm={12} md={12} sx={{ minHeight: '20rem' }}>
                                        <div>
                                            <h3><b>Nirvana Shatakam</b></h3>
                                            <p>Nirvana means ‘formless’. The Nirvana Shatakam is towards this – you don’t want to be either this or that. If you don’t want to be this nor that, then what do you want to be? Your mind cannot understand this because your mind always wants to be something.</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}>
                                        <h4><b>READ MORE</b></h4>
                                        <ArrowForwardIcon style={{color: '#92A056'}} fontSize= 'large'/>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <button>Register</button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                    </Grid>
                </section>
            </div>
            {/* <About /> */}
            {/* <ProgramTakeaway /> */}
            <BestTestimonial />
            {/* <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave} className="image-course-surya-kriya-wave4" />
                </div>
                <Register guidlines={[
                    "Age Limit: Adults and 14 plus adolescents",
                    "Intensity - Low"
                ]} />
            </div> */}
            <Benefits />
            <Testimonial />
            <VideoTestimonial />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery />
        </div>
    )
}
