import React from 'react'
import "./style.css"
import Image from "../../../../../images/png/image-children-programs.png";


export default function ChildrenPrograms() {

    return (
        <section>
            <div className="container-flex-row">
                <div>
                    <img src={Image} className="image-children-programs" />
                </div>
                <div className="container-text-children-programs">
                    <h2>Children’s Destination Camps</h2>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    )
}