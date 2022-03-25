import React from 'react'
import ListTestinomial from '../../../../lists/ListTestinomial';
import Divider from '../../../../ui/Divider';
// import Wave from "../../Images/image-wave3.png";

import "./style.css"



export default function Testimonial() {

    return (
        <div>
            {/* <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-dwijass12-wave3" />
            </div> */}
            <section>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h2>Testimonials</h2>
                    <Divider />
                </div>
                <ListTestinomial data={
                    [
                        {
                            text: "I felt a massive massive difference in the amount of activity I could do and how conscious I was about everything  around me. I just felt more alive, if that makes any sense. I just felt like I had way much more exuberant energy and I thank you.",
                            name: "Prabhjot singh Gill, Mississauga",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2FScreenshot_20210212-220153_Samsung%20Notes%20-%20P%20Gill.jpg?alt=media&token=8212753f-b2da-4020-a656-8188fd0e4d3a"
                        },
                        {
                            text: "This is a one of a kind program that radically alters your life within a few days. If followed properly, the program provides balance and stability to the body while the mind develops clarity of thought and emotions. I would highly recommend this program to anyone who wants to start living a better life.",
                            name: "Adesh Saikia, India",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2F73B3440D-AFF5-4AFE-B7A9-84A4BDB842DF%20-%20Adesh%20Saikia.jpeg?alt=media&token=af718e64-2c77-45b5-9948-2e33317b4943"
                        },
                        {
                            text: "The experience was very much from the outside to within. The way it is taught and done makes it an incredible program. The body and mind feels fresh and light the whole day. Thinking doesn't get clouded and a fresh perspective for everything surfaces. A must do program to know and feel the real you.",
                            name: "Sonali Dhoreliya, India",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2F0FB61DC0-738F-4163-A57A-70E2CF4A05BE%20-%20sonali%20katewa.png?alt=media&token=5d53ee59-07bb-4d31-b8e8-24b4ca462c15"
                        },
                        {
                            text: "I can't express my joy in words. After  joining Dwijass I started my practice. It gave me some kind of confidence and determination, no matter what happens, I will complete my daily practice. Feel like a different person now. Thank you Shloka Akka for your excellent way of explaining and personal attention.",
                            name: "Navaneetha Chengad Satwa, Dubai, UAE",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2FIMG_20180602_004638%20-%20Navaneetha%20Chengad.jpg?alt=media&token=6ff7fbd0-fdb4-4420-ab44-75b6a7419b2c"
                        },
                        {
                            text: "This was an eye-opening experience. So much peace, serenity, joy, inclusion, compassion, posture improvement, and I hope, I will have my family join this course. I also noticed my concentration improved and I am more disciplined. I see life differently and understand better how to live.",
                            name: "Daniela Pleter, Canada",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2FIMG_20210522_124808261%20-%20Dana%20Pleter.jpg?alt=media&token=bb3d6f8d-6cfc-4a78-b1ac-78d4b6bbf8d9"
                        },
                        {
                            text: "Wonderful program. This program really helped me think better and clearer. I would love to continue to practice Hatha yoga all my lifetime. Thanks for all your dedication towards this divine service towards the well-being of mankind.",
                            name: "Rajeshwari Bhavanikumar, Franklin / USA",
                            about: "",
                            image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FTestimonials%2FIMG-20210529-WA0015%20-%20Raji%20Bk.jpg?alt=media&token=b630f16b-a5c5-47a6-98d2-48e9a2db685f"
                        },
                    ]
                } />
            </section>
        </div>

    )
}
