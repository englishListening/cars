import React from "react";
import "./Footer.css"
import { SiGmail } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import YZ from './YZ.png'
const Footer = () => {
    return(
        <div className="bg">
            <div className="Footer">
                <div>
                     <a href="/"><img src={YZ} alt="" /></a>
                     <p>2023 Y&Z</p>
                     <p>Ommaviy Taklif</p>
                </div>
                <div className="b">
                     <h1>Brendlar</h1>
                     <p>Chevrolet</p>
                     <p>Best</p>
                     <p>Mercedes Benz</p>
                     <p>BMW</p>
                     <p>GM</p>
                     <p>BYD</p>
                     <p>Cherry</p>
                </div>
                <div className="b">
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
        </div>
    )
}

export default Footer