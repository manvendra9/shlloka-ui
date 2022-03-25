import React from 'react'
import Image from "../../../images/png/LogoShlloka.png"

import { validate } from "../../../model/constant"

import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../../../redux/user/async-action';

import "./style.css"

export default function SignUp() {

    const [errorFullName, setErrorFullName] = React.useState(true);
    const [errorPassword, setErrorPassword] = React.useState(true);
    const [errorEmail, setErrorEmail] = React.useState(true);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();


    const validateAndSubmit = (data) => {
        dispatch(signupUser('Nakul', 'nakulmehra677@gmail.com', 'abc@1234'));
    }

    return (
        <div>
            <div className="horizontal-align-center">
                <img src={Image} className="image-sign-up-shlloka horizontal-align-center" />
            </div>
            
            <div className="horizontal-align-center">
                <div className="container-form">
                    {/* <form style={{ background: '' }}> */}
                        <h2 className="text-center">Sign Up</h2>
                        <div style={{ padding: '2rem 0' }}>

                            <div className="container-item-form">
                                <div className="container-label">
                                    <label className="label" for="Full name">Full name *</label>
                                </div>
                                <div className="container-input">
                                    <input className="input" type="text" />
                                </div>
                                {errorFullName ? <div style={{ color: 'red' }}>evedfvfd</div> : null}
                            </div>

                            <div className="container-item-form">
                                <div className="container-label">
                                    <label className="label" for="Email address">Eamil address *</label>
                                </div>
                                <div className="container-input">
                                    <input className="input" type="email" />
                                </div>
                                {errorEmail ? <div style={{ color: 'red' }}>evedfvfd</div> : null}
                            </div>

                            <div className="container-item-form">
                                <div className="container-label">
                                    <label className="label" for="Password">Password *</label>
                                </div>
                                <div className="container-input">
                                    <input className="input" type="password" />
                                </div>
                                {errorPassword ? <div style={{ color: 'red' }}>evedfvfd</div> : null}
                            </div>
                        </div>
                        <div>
                            <button className="button-submit" type="submit" value="Submit" onClick={() => validateAndSubmit()} >Submit</button>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}
