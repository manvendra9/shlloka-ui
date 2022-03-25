import React from 'react'
import ListOnlineCourses from '../../../../lists/ListOnlineCourses';
import Divider from '../../../../ui/Divider';

// list of items
const listOnline = [
    {
        name: 'Yoga for Adults ~ Beginners',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FCourseItem%2FYoga%20for%20Adults%20-%20Beginners%20%20image.png?alt=media&token=f64c7eac-f331-4ee2-a425-6b082151287b",
        description: "This program consists of simple yet powerful set of practices that activate the joints, muscles and energy system. It is a good starting point for those who are new to yoga, and it can be used as a preparation for other yoga practices."
    },
    {
        name: 'Yogic Food Program',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FCourseItem%2FFood%20image%20%20canva%20.png?alt=media&token=f476080c-5d51-42ca-8e7a-939edb58646e",
        description: "You will learn the secret tips of the Yogis to live a long healthy and happy life. Based on the guidelines given by Sadhguru, this program will make you a master of your diet."
    },
    {
        name: 'Yoga for Children',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FCourseItem%2FYoga%20for%20Children%20image.png?alt=media&token=499be6ac-66ba-42bd-9873-ea4ee4dc63c6",
        description: "Isha Yoga for Children offers a unique possibility for every child to experience a joyful blossoming of their natural potential. Children are exposed to Yogic practices designed by Sadhguru, Yogic Diet, Yogic Games, Exposure to Nature, Fun Activities and yogic lifestyle."
    },
    {
        name: 'Yoga for Adults ~ 21 Days',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FCourseItem%2F21%20days%20%20image.png?alt=media&token=f812e652-7d16-45d5-b368-84c7f8a58a77",
        description: "This transformational 21 Day Intensive program, with practices designed by Sadhguru - aims to equip participants to use every aspect of life for their overall well-being . The program includes yoga, meditations and lifestyle sessions"
    },
    {
        name: 'Dincharya ~ Yogic Lifestyle Program',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOnlineCourses%2FCourseItem%2FLifestyle%20%20%20image.png?alt=media&token=b6f7af96-c2a9-48fb-8168-dbfbe9f63cab",
        description: "This program offers an opportunity to explore the yogic lifestyle and all aspects of life, right from how you wake up, how you bathe, how to speak, what to wear, how you energize yourself and how you sleep. Every activity that you do can become a process for your well-being if you approach it the right way."
    },
];

const listOffline = [
    { 
        name: 'Angamardana ~ Yogic Gym', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FAngamardana%20image.png?alt=media&token=2ff309bf-f38c-47ff-a970-e1892805ff33", 
        description: "Yogic Gym uses your own body weight and movement. It needs no fitness equipment. A series of 31 dynamic processes, rooted in yoga, to invigorate the body and reach peak physical fitness. It's about gaining complete mastery over the limbs, organs and other parts of the body without fitness equipment." 
    },
    { 
        name: 'Surya Kriya ~ Fire up the sun within', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2Fsurya%20kriya.png?alt=media&token=4e040495-a818-4115-825b-14fc688b9653", 
        description: "Surya Kriya is a potent 21-step yogic practice of tremendous antiquity, designed as a holistic process for health and inner well-being. Surya Kriya is a complete spiritual process by itself." 
    },
    { 
        name: 'Surya Shakti ~ Ultimate Fitness',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2Fsurya%20shakti%20image.png?alt=media&token=5138cbc4-0b62-42ae-aa84-71f17258ff48", 
        description: "It energizes the system to a different dimension. This 18-step process helps to strengthen the ligaments that hold the skeletal and muscular structure together. It is a complete process, which is largely physical in nature. If you do 108 cycles, it will make you fit and you will not need any other form of exercise." 
    },
    { 
        name: 'Bhuta Shuddhi ~ Ultimate Cleansing', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FBhutha%20Shudhi%20image.png?alt=media&token=186f79ea-815e-4581-ad8a-17261dcb3957", 
        description: '“Purification of the five elements” (i.e., earth, water, fire, air, and space) which get to the root of imbalances in the body that lead to disease. This simple practice which you can do daily reorganizes your system on the elemental level. This process also shapes the body into a stepping stone towards one’s ultimate well-being.' 
    },
    { 
        name: 'Yogasanas ~ Ultimate well-being', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FYogaasan%20%20image.png?alt=media&token=711dca9d-eaaf-473b-94d9-847918cc9507", 
        description: "Offered as a set of 21 powerful postures, these are very subtle processes to manipulate one’s energy to naturally achieve a chemistry of health, joy, blissfulness, and above all balance." 
    },
    { 
        name: 'Bandhas', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FBandhas%20image.png?alt=media&token=40cd0a5d-dd33-41e7-aa1d-cd8fc05fb9d3", 
        description: "Bandhas are about slowly getting control and locking your energy the way you want. Bandhas are employed to gain control of your energy system. First you practice it physically for some time. If one day, without employing your muscular or skeletal system, you are still able to do it, then your bandha is good." 
    },
    { 
        name: 'Bhastrika ~ Utilizing Breath', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FBhastrika%20image.png?alt=media&token=2e5fd382-1309-4935-8d37-af4ff8373cd4", 
        description: "Bhastrika Kriya is a powerful kriya, which purifies the blood and increases lung capacity. It can be of assistance to people with asthma, allergy, sinusitis, hormonal imbalance and skin disease." 
    },
    { 
        name: 'Jalaneti', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FJala%20Neti%20image.png?alt=media&token=1f4e0e5e-6d66-4c2e-a647-a655b95b10a5", 
        description: "Jala Neti is a process of cleansing the nasal passages with saltwater, helping with the disease of head, eyes, nose, throat, sinuses, migraine, stress, anxiety, tiredness, allergies - Improving the quality of sleep." 
    },
    { 
        name: 'Upa-Yoga', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2Fupa%20yoga%20image.png?alt=media&token=ea693efa-d5f0-4e7d-8350-26d0338a21d0", 
        description: "Within the human system, the energy flows along 72,000 pathways called nadis. At the joints, the nadis meet and form nodes, making the joints storehouses of energy. Upa-yoga activates this energy and also lubricates the joints, creating an instant sense of alertness and liveliness. We will be starting a very effective process called Upa-yoga. It is a simple yet powerful system of practices that activate the joints, muscles and energy system. Based on a sophisticated understanding of the body’s mechanics, Upa-yoga brings great ease to the whole system. It relieves physical stress and tiredness. It rejuvenates the body after a period of inactivity and negates the effects of jetlag and long travel." 
    },
    { 
        name: 'Mantra and Nada Yoga ~ Mental Peace and Balance',
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FMantra%20image%20.png?alt=media&token=a52c9647-1505-4175-bf89-db19ee8c84bb", 
        description: "Mantras help stabilize the body and mind, thus eliminating psychological disturbances and alleviating chronic ailments. In the yogic system, a few of the sounds have been identified as keys to access deeper dimensions of life. Nada Yoga uses the power of sound to activate a particular kind of energy in different parts of the body, bringing a lasting sense of inner pleasantness." 
    },
    { 
        name: 'Meditation', 
        image: "https://firebasestorage.googleapis.com/v0/b/shlloka.appspot.com/o/Courses%2FOfflineCourses%2FCourseItem%2FMeditation%20image%20.png?alt=media&token=0655d3a9-9a67-45a7-8bd6-6b34454ff42e", 
        description: "Offered by Sadhguru, it has the potential to transform the life of anyone willing to invest just a few minutes a day. How we organize and focus our minds will decide the direction our life flows. These meditations enable the power of the mind to create what one wants in his life." 
    },
];


export default function Courses() {

    return (
        <div className="section-no-padding-horizontal">
            <h2 className="text-center">Our Offerings</h2>

            <div className="container">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3 className="text-online-course">Online Courses</h3>
                    <Divider />
                </div>
                <div>
                    <ListOnlineCourses data={listOnline} />
                </div>
            </div>

            <div className="container">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                    <Divider />
                    <h3 className="text-offline-course">In-Person / Offline Courses</h3>
                </div>

                <div>
                    <ListOnlineCourses data={listOffline} />
                </div>
            </div>
        </div>
    )
}
