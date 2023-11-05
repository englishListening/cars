import React from "react"; 
import './Navbar.css';
import { Link } from "react-router-dom";
import Results from "../components/Result";
import YZ from './YZ.png'
import { BsFillCartFill } from "react-icons/bs";

function Navbar({ setShow, size },props) {


  return (
    <div>
        <div className="header">
          <div className="navbar">
          <img className="carlogo" src={YZ} alt="" />
          <div className="contact">
           <Link to="/"><p>Uyga</p></Link> 
            <Link to="/katalog"><p>Katalog</p></Link>
            <a href="#haqida"><p>Biz haqimizda</p></a>
            <a href="/instructions"><p>Qo'llanma</p></a>
          <Link to="/signup"><p>Registratsiya</p></Link>
          </div>
          <div className="log">
          <div className="saver"> 
          <div className="cart" onClick={() => setShow(false)}>
          <span>
            <BsFillCartFill id="FillCart"/>
          </span>
          <span>{size}</span>
        </div>
        <p className="return" onClick={() => setShow(true)}>x</p>
          </div>
          
          </div>
          </div>
          </div>
         <Results/>
    </div>
  );
}


export default Navbar