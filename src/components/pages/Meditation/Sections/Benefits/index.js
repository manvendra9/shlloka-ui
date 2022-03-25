import React from 'react'
import Divider from '../../../../ui/Divider';
import Beneifits from "./Images/image-benefits.png";

import "./style.css";


export default function Benefits() {

    return (
        <section>
            <h2 className="text-center">Upa Yoga Benefits</h2>
            <div className="text-center">
                <Divider className="center-horizontal" />
            </div>
            <div className="text-center">
                <img src={Beneifits} className="yoga-benifits" />
            </div>
        </section>
    )
}
