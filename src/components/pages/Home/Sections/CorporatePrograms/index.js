import React from 'react'
import "./style.css"
import Image from "./Images/image-corporate-programs.png";
import Wave from "../../../../../images/svg/background-wave-2.svg";



export default function CorporatePrograms() {

    return (
        <div>            
            <section>
                <div className="container-flex-row">
                    <div>
                        <img src={Image} className="image-corporate-programs" />
                    </div>
                    <div className="container-text-corporate-programs">
                        <h2>Corporate Programs</h2>
                        <button>Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}