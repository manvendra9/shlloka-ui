import React from 'react'
import LogoShlloka from "../../images/png/LogoShlloka.png"
import Whatsapp from "../../images/svg/color-whatsapp.svg"
import Telegram from "../../images/svg/color-telegram.svg"
import Menu from "../../images/svg/menu.svg"



export default function Header() {

    return (
        <div>
            <header>
                <div className="toolbar">
                    <a href="/">
                        <img style={{ width: 'auto', height: 100, verticalAlign: 'text-bottom' }}
                            alt="Logo"
                            src={LogoShlloka} />
                    </a>

                    <div className="ul-inline">
                        <div className="li-toolbar"><img src={Whatsapp} style={{ height: 30 }} /></div>
                        <div className="li-toolbar"><img src={Telegram} style={{ height: 30 }} /></div>
                        <div className="li-toolbar"><img src={Menu} style={{ height: 30 }} /></div>
                    </div>
                </div>
                {/* <hr /> */}
            </header>
            {/* <div className="toolbar" /> */}
            {/* <hr /> */}
        </div>
    )
}
