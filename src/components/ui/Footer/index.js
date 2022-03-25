import React from 'react'

import Logo from "./Images/logo-isha-hatha.jpeg";
import Sathguru from "./Images/sathguru.png";
import IconWhatsapp from "../../../images/svg/whatsapp.svg";
import Background from "./Images/background.png";
import GoldenLeaf1 from "./Images/golden-leaf-1.png";
import GoldenLeaf2 from "./Images/golden-leaf-2.png";
import Yoga from "./Images/yoga.png";

import Facebook from "./Images/Social/facebook.svg";
import Instagram from "./Images/Social/instagram.svg";
import Twitter from "./Images/Social/twitter.svg";
import Linkedin from "./Images/Social/linkedin.svg";
import Youtube from "./Images/Social/youtube.svg";

import "./style.css"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Footer() {

    // return(
    //     <div style={{}}>

    //         <div style={{background: "gold", width:200, height:200, position:"absolute", right:0}}>a</div>
    //         <div style={{background: "blue", width:200, height:200}}>a</div>
    //     </div>
    // )


    return (
        <div>
            <div className="container-description-footer">
                <div className="container-flex-row container-certification">

                    <img src={Sathguru} className="sathguru" />
                    <img src={Logo} className="logo-isha-hatha" />

                    {/* <p style={{ padding: "0px 10px" }}>If you have mastery over your physical body, 15 to 20% of your life and destiny will be in your hands. If you have mastery over your mind, 50 to 60% of your life and destiny will be in your hands. If your have mastery over your very life energy</p> */}
                </div>
                <img src={Yoga} className="yoga-footer" />
            </div>

            <footer>
                <img src={GoldenLeaf2} className="leaf-footer-left" />
                <img src={GoldenLeaf1} className="leaf-footer-right" />
                <img src={Background} className="background-footer" />

                <div className="container-footer">
                    <div style={{textAlign:"right", padding:4}}>
                        <button>Upcoming programs</button>
                    </div>
                    <div className="container-flex-row">
                        <div>
                            <img src={IconWhatsapp} style={{ width: 60, padding: 24 }} />
                        </div>
                        <div className="container-text-footer">
                            <div className="div-text-footer">
                                Get regular updates on all upcoming events straight on your Whatsapp.
                            </div>
                            <div className="div-text-footer">
                                (You'll need to save our number in your contacts):
                            </div>
                            <div className="div-text-footer">
                                +91-6366852888
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <button>About Shlloka - Isha Hatha Yoga teacher</button>
                            <button>About Sadhguru</button>
                            <button>Join us on Whatsapp</button>
                            <button>Volunteering opportunities</button>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", fontSize: 8 }}>
                        <div className="div-text-footer">
                            Email - volunteers@shlloka.com
                            </div>
                        <div className="div-text-footer">
                            Contact number - +91 6366 852 888
                            </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: 40 }}>
                        <img src={Facebook} className="social-icon-footer" />
                        <img src={Twitter} className="social-icon-footer" />
                        <img src={Instagram} className="social-icon-footer" />
                        <img src={Linkedin} className="social-icon-footer" />
                        <img src={Youtube} className="social-icon-footer" />
                    </div>
                    <div className="link-container-footer">
                        <span><Link to="/hello" className="link-footer">Legal Terms</Link></span>
                        <span> | </span>
                        <span><Link to="/hello" className="link-footer">Privacy Policy</Link></span>
                        <span> | </span>
                        <span><Link to="/hello" className="link-footer">Terms of Use </Link></span>
                    </div>

                </div>

            </footer>

        </div>
    )
}
