import React from "react";
import { Navbar } from "reactstrap";
import "./CardPage.css"
const CardPage = ({props}) => {
    const {name,type,imgurl,price,_id} = props
    return(
        <div>
            <Navbar/>
            <div key={_id} className="CardPages">
                <div>
                <h1>{name}</h1>
                <img src={imgurl} alt="" />
                </div>
                <div>
                    <p>{price}</p>
                    <b>{type}</b>
                </div>
            </div>
        </div>
    )
}

export default CardPage