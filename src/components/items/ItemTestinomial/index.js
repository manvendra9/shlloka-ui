import React from 'react'
import Sample from "../../../images/jpg/sample2.jpg"
import "./itemTestinomial.css"


export default function ItemTestinomial(props) {

    const image = props?.data?.image ?? "Image not available";
    const text = props?.data?.text ?? "Testinomial not available";
    const name = props?.data?.name ?? "Name not available";
    const about = props?.data?.about ?? "Person detail not available";

    return (
        <div className="container-flex-row" style={{ padding: 0 }}>

            <div className="image-testinomial-person">
                <img src={image} />
            </div>

            <div className="container-text-testinomial">
                <p style={{ whiteSpace: "initial" }}>{text}</p>
                <div className="testinomial-name">{name}</div>
                <div className="testinomial-about">{about}</div>

            </div>
        </div>
    )
}
