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

import "./style.css";
import MedicalBenefits from '../../ui/MedicalBenefits'

export default function UpaYoga() {

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
                        title: "Upa Yoga",
                        subtitle: "",
                        description: 'Upa Yoga is a simple yet powerful set of 10 practices that activates the joints, muscles and energy system, bringing ease to the whole system. Based on a sophisticated understanding of the body’s mechanics, Upa Yoga dispels inertia in the body’s energy and brings ease to the whole system.',
                        quote: "Upa-Yoga lubricates the joints, exercises the muscles, and activates your energy nodules. You will feel a higher level of alertness."
                    }} />
            </div>

            <About />

            <div>
            <div style={{ position: "relative" }}>
                    <img src={Statue2} className="image-course-upa-yoga-statue2" />
                </div>

                <ProgramTakeaway />
            </div>

            <BestTestimonial />
            
            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave3} className="image-course-upa-yoga-wave3" />
                </div>
                <Register guidlines={[
                    "Not suitable for",
                    "Pregnant Women",
                    "People with an active hernia",
                    "Anyone who has had major open surgery within the last 6 months",
                    "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks"
                    
                ]} />
            </div>
            
            <Benefits />

            <div>
                <MedicalBenefits tabs={[
                    "Respiratory System",
                    "Cardiovascular system",
                    "Digestive System",
                    "Excretory system",
                    "Immune system",
                    "Endocrine system",
                    "Pituitary (master gland)",
                    "Pineal gland",
                    "Thyroid and Parathyroid",
                    "Thymus",
                    "Adrenal",
                    "Pancreal",
                    "Reproductive organs",
                    "Nervous system",
                    "Musculoskeletal system",
                    "Mental health",
                    "Homeostasis",
                ]}
                    data={[
                        {
                            title: "There is complete expansion and contraction of all lobes of the lungs causing emptying of lungs and refilling.",
                            list: [
                                "This causes better ventilation resulting in better gas exchange at the cellular level causing revitalization and rejuvenation of the cells keeping the cells healthy.",
                                "Capacity of the lungs increases over a period of time"
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Improves functioning of the heart causing better circulation resulting in better blood supply to vital organs.",
                                "This causes nourishment of all cells.",
                                "The cardiac muscles are strengthened and the blood vessels of the heart, the coronary arteries, are stimulated to multiply, improving circulation and reducing the chances of heart attack.",
                                "It also helps with blood vessel diseases and general fatigue and causes a sense of overall sense of well being."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Massaging and toning of the entire digestive system resulting in better appetite, proper digestion, assimilation and elimination of waste",
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "The improved circulation and massaging of the kidneys result in better functioning of the kidneys causing effective elimination of waste.",
                                "Overall circulation of blood to the skin causing increased perspiration which helps to detoxify the blood.",
                                "This causes better complexion and also helps with skin diseases.",
                                "Toning of skin also takes place"
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "There is better circulation of lymph resulting in improved immunity.",
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Imbalances of the endocrine glands are corrected as the glands are stretched and toned and receive better blood supply."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Increases the blood flow and stimulates the nerves of the pituitary gland."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Enhances the functioning of the pineal gland."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "The neck is stretched and contracted. This stimulates and increases the blood flow to the thyroid and balances its secretion."
                            ] 
                        },
                        {
                            title: "",
                            list: [
                                "Stimulates and activates the gland."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Stimulates and massages the gland and optimizes the secretion. Helps to manage stress."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Compresses and stretches the pancreas. Helps with better glucose regulation of the body."
                            ]
                        },
                        {
                            title: "",
                            list: [
                                "Tones the organs and regulates the secretions of the reproductive system."
                            ]
                        }
                    ]}
                />
            </div>

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave4} className="image-course-upa-yoga-wave4" />
                </div>
                <Testimonial />
            </div>

            <VideoTestimonial />

            <div>
                <div style={{ position: "relative" }}>
                    <img src={Wave5} className="image-course-upa-yoga-wave5" />
                </div>
                <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            </div>
            <Gallery />
        </div>
    )
}
