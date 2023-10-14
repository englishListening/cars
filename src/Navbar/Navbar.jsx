import React from "react"; 
import './Navbar.css'
import Results from "../components/Result";
import YZ from './YZ.png'
function Navbar(props) {


  return (
    <div>
        <div className="header">
          <div className="navbar">
          <img className="carlogo" src={YZ} alt="" />
          <div className="contact">
           <a href="/"><button className="buttona">Uyga</button></a> 
            <a href="/katalog"><p>Katalog</p></a>
            <a href="/saqlanganlar"><p>Saqlanganlar</p></a>
            <a href={props.url}><p>Biz haqimizda</p></a>
          </div>
          <div className="log">
          
          <a href=""><p className="buttona"> Sign up</p></a>
          </div>
          </div>
         <Results/>
          </div>
    </div>
  );
}


export default Navbar