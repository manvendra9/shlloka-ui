import React from 'react'
import LeftQuote from "./Images/left-quote.svg";
import RightQuote from "./Images/right-quote.svg";

export default function Quote(props) {
    
    return (
        <section>
              <div className="container container-flex-row">
                    <img src={LeftQuote} className="icon-quote-left" />
                    <div className="container-flex-row">
                        <p className="quotes">"{props.data.quote}" - <b>{props.data.name}</b></p>
                    </div>
                    <img src={RightQuote} className="icon-quote-right" />
                </div>
        </section>
    )
}
