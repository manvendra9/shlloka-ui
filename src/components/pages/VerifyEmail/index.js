import React from 'react'
import Image from "../../../images/png/LogoShlloka.png"

import { useHistory } from "react-router-dom";

import "./style.css"


export default function VerifyEmail() {

    let history = useHistory();

    const signin = () => {
        history.push('/signin');
    }

    return (
        <div>
            <div className="horizontal-align-center">
                <img src={Image} className="image-sign-up-shlloka horizontal-align-center" />
            </div>

            <div className="horizontal-align-center">
                <div className="container-form">
                    <h2 className="text-center">Success</h2>

                    <div style={{ padding: '2rem 0' }}>
                        <p>We collected your details. Please check your mail box to verify your email. After verification signin by clicking the button given below</p>

                        <div>
                            <button className="button-submit" type="submit" value="Submit" onClick={() => signin()} >Signin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
