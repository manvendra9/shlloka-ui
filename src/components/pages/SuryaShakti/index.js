import React from 'react'
import About from './Sections/About'
import RegistrationDetails from './Sections/RegistrationDetails'
import ProgramTakeaway from './Sections/Takeaway'
import Gallery from '../../ui/Gallery'
import Benefits from './Sections/Benefits'
import Landing from './Sections/Landing'
import BestTestimonial from './Sections/BestTestimonial'
import KnowFromSadhguru from '../../ui/KnowFromSadhguru'
import VideoTestimonial from '../../ui/VideoTestimonials'
import Testimonial from '../../ui/Testimonials'
import Register from "../../ui/Register"
import MedicalBenefits from '../../ui/MedicalBenefits'


export default function SuryaShakti() {

    return (
        <div>
            <Landing />
            <About />
            <ProgramTakeaway />
            <BestTestimonial />
            <Register guidlines={[
                "Pregnant Women",
                "People with an active hernia",
                "Anyone who has had major open surgery within the last 6 months",
                "Anyone who has had a laparoscopic surgery or any severe muscular injury within the last 6 weeks",
                "If you have any questions regarding your participation, please connect with us via the details in the description below.",
                "Age; Adults & Children above 7 years",
                "Intensity - Moderate to High",
                "Duration - 30+ min"
            ]} />
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
            <Testimonial />
            <VideoTestimonial />
            <KnowFromSadhguru link="https://www.youtube.com/watch?v=SukisKJve7o" />
            <Gallery />
        </div>
    )
}
