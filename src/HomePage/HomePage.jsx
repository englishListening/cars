import React from "react"; 
// import { useState } from 'react';
import './HomePage.css'
import shest from './shest.png'
import Results from "../components/Result";
import Navbar from "../Navbar/Navbar";
import shina from "./Shina.png"
import Footer from "../Footer/Footer";
import man from "./odam.png"
import klyuch from './klyuch.png'
import { Link } from "react-router-dom";
import Card from "../Card/Card";
function HomePage() {


  return (
    <div>
        <div className="headers">
            <Navbar url = "#haqida"/>
            <img className="shest" src={shest} alt="" />
            <div className="ehtiyot">
              <div className="eng">
              <p>Eng sifatli avtomobil <span>ehtiyot qismlari</span> faqat bizda!</p>
              <button>Mahsulotlar</button>
              </div>
              <div>
                <img src={shina} alt="" />
              </div>
            </div>
            <div className="mahtash">
              <p>Eng katta sifat</p>
              <p>Hamyonbob narxlar</p>
              <p>Katta tanlov</p>
            </div>
          </div>
          <div className="comp">
          <div className="haqida" id="haqida">
            <p>Biz haqimizda</p>
          <h2>Biz haqimizda</h2>
          </div>
        <div className="kompaniya">
          <div className="obj">
         
          <div className="kompaniyaText">
          <p>
            <span>Y&S sayti</span> avtomobil ahtiyot qismlari va aksesuarlarni sotuvchi sayt. <br /> <br />
            
            Bizning saytimizda Chevrolet , Best , GM , BYD
            , Cherry , Lada kabi avtomobillari brendlarini topishingiz mumkin.
            Hamyonbob , yangi va sifatli avtomobil ehtiyot qismlari faqat bizda.
            <br /><br />
            Katta tanlov!

          
          </p>
          </div>
          </div>
          <div className="manDiv">
          <img src={man} alt="" />
          <img id="img" src={klyuch} alt="" />
          </div>
          
        </div>
          </div>
          <div className="katalog">
          <div className="haqida">
            <p>Katalog</p>
          <h2>Katalog</h2>
          </div>
          
          <div className="shini">
              <ul>
                <li><a href="">Balonlar</a></li>
                <li><a href="">Akumulyator</a></li>
                <li><a href="">Bamperlar</a></li>
                <li><a href="">Faralar</a></li>
                <li><a href="">Oynalar</a></li>
                <li><a href="">Moy</a></li>
                <li><a href="">Aksesuarlar</a></li>
                
              </ul>
          </div>
          <div className="chose">
          <div className="tip">

              <p>Brend</p>
              <select className="chooseBrend" name="brend" id="">
                <option value="chevrolet">Chevrolet</option>
                <option value="GM">GM</option>
                <option value="BYD">BYD</option>
                <option value="Cherry">Cherry</option>
              </select>
              <p>Avtomobil</p>
              <select className="chooseBrend" name="brend" id="">
                <option value="Matiz">Matiz Akumulyator</option>
                <option value="Spark">Spark</option>
                <option value="Nexia">Nexia</option>
                <option value="Cobalt">Cobalt</option>
                <option value="Capticva">Capticva</option>
                <option value="Gentra">Gentra</option>
              </select>
              <button className="choosebutton">Qidirish</button>
          </div>
          <div className="fcard">
            <Card/>
          </div>
          </div>
          </div>
            <Footer/>
          
    </div>
  );
}


export default HomePage