import React from 'react'
import ListTestinomial from '../../../../lists/ListTestinomial'
import Divider from '../../../../ui/Divider';



export default function Testimonial() {
    return (
        <section>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h2>Testimonials</h2>
                <Divider />
            </div>            
            <ListTestinomial data={
                [
                    {
                        text: "This was an eye opening experience. So much peace, serenity, joy, inclusion, compassion, posture improvement and I hope I can have my family and friends join this course. I also noticed that my concentration improved and I am more disciplined. Together with the inner engineering program that I took last year, I see life differently and understand better how to live! Thank you and hope you will change many others' perceptions of life!",
                        name: "Daniela Pleter, Canada",
                        about: "12 Days Online Isha Upa Yoga Classes",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2FDana%20Pleter.jpeg?alt=media&token=d13abb76-add6-4aca-924a-ecf7ff7a4f23"
                    },
                    {
                        text: "This program should be mandatory in educational teachings. Especially for the youth like me; future world builders, it is crucial that Yogic methods including nutrition and practices be part of our growth. Only with a sharp mind, strong body and soft heart, the world can truly blossom into a higher possibility and be in tune with the Creation.",
                        name: "Vaishnav Advaita Bissessur, Mauritius",
                        about: "Yogic Food Program",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2F201908111034006936788281268%20-%20Oogly_%20Boogie.jpeg?alt=media&token=19a09b3c-86f7-45ae-b321-f17b97155ba7"
                    },
                    {
                        text: "The program was enlightening for us too, not just kids. It gave us a new dimension of life to look towards as a family. We practiced yoga as a couple, and wished kids to get involved & understand its importance, and the program provided the same for us. We are so pleased. Looking forward to more of them. Thanks a lot for sharing your knowledge with such clarity & conviction.",
                        name: "Parent name - Bhumika Pundit | Child name - Keya Pandit",
                        about: "Online Bloom Hatha Yoga Program",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2FIMG_20200729_105458306%20-%20Bhumika%20Pandit.jpeg?alt=media&token=e6723f45-62bb-4591-8b30-1fd744c4aa0b"
                    },
                    {
                        text: "Now I can say that something inside of me was waiting for these teachings and the deep wisdom embodied by these practices. It's been a challenging and joyful time that I took as a preparation for whatever might come in the future for me.  After a tough pandemic year that all of us have faced, I feel definitely ready to take steps further not just for my own wellbeing, but also to support and contribute to the extent of my possibilities to enhance life and the world as well. Best regards and blessings to Sadhguru, to teacher Shlloka and all the volunteer crew who make  transmission of ancient Yoga an alive and vivid possibility for citizens of the world",
                        name: "Marco Antonio Castro-Rodríguez, Costa Rica",
                        about: "21 Days Online Isha Upa Yoga Program",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2FNamaskar%20Alajuelita%20-%20Marco%20Castro.jpeg?alt=media&token=f27cb4ff-7e26-48d5-b316-9a2d87b78522"
                    },
                    {
                        text: "Thank you so much for this incredible session. It was an amazing experience to follow the very detailed explanations given in such a clear and understandable way. Would really love to join again.",
                        name: "Sibylle Koch - Germany",
                        about: "Yogic Food Program",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2Fpassfoto%20-%20Sibylle%20Koch.jpeg?alt=media&token=6063e720-c16c-4f84-a255-7b1b19b3645d"
                    },
                    {
                        text: "Great workshop. I have been waiting for this workshop to gain knowledge on Yogic diet. This session was very informative and will definitely bring a lot of change in myself or anyone who attends this workshop.",
                        name: "Ajay sharma, Dubai",
                        about: "Yogic Food Program",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2FECCACDB3-2AF2-4ABE-A771-900B42C84FD2%20-%20Ajay%20Sharma.jpeg?alt=media&token=5629c2d2-0ff0-4eb9-992d-8d2753d4f3af"
                    },
                    {
                        text: "This was an amazing experience and it made me wake up early in the morning. The way Shllokaji communicates with us was so humble. I have problems in my lumbar spine and it started healing by doing yoga namaskar. Now my sleep quality has also increased, I have lost weight and laziness has also reduced. I always feel refreshed. On the whole it was a nice journey",
                        about: "Yuvashree - Dubai",
                        name: "12 Days Online Isha Upa Yoga Classes",
                        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Testinomials%2FHomePage%2FIMG_20200308_113628%20-%20Yuva%20sri.jpeg?alt=media&token=0a3ff641-b886-41a0-9817-e0474782ca84"
                    },
                ]
            } />
        </section>
    )
}
