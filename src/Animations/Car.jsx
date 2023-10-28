import React from "react"
import YZ from "./YZ.png"
import { BsTelegram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
const Car = () => {
    return(
        <div className="carz">
            <img className="yandz" src={YZ} alt="" />
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <div className="s">
                    <h1>Bog`lanish uchun</h1>
                     <p>Black Clover Jamoasi</p>
                     <div className="contacts">
                        <BsTelegram id="icons"/>
                        <p>@bluelock2007</p>
                     </div>
                     <div className="contacts">
                        <IoIosCall id="icons"/>
                        <p>+998-(90)-902-66-81</p>
                     </div>
                </div>
        </div>
    )
}

export default Car