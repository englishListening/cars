import React from "react"; 
import './HomePage.css'
import Footer from "../Footer/Footer";
import man from "./odam.png"
import klyuch from './klyuch.png'
import axios from "axios";
import { useState,useEffect } from "react";
import Card from "../Card/Card";
import Gear from "../Animations/Gear";
function HomePage({handleClick}) {
      const [options,setOptions] = useState()
      const [matiz,setMatiz] = useState([])
      
      const sparkurl = [
        {
          id:1,
          type:"Spark Akumulyator",
          name:"Akumulyator"
        },
        {
          id:2,
          type:"Spark Bamper ",
          name:"Bamperlar"
        },
        {
          id:3,
          type:"Spark Balon ",
          name:"Balon"
        },
        {
          id:4,
          type:"Spark fara",
          name:"Fara"
        }
      ]
     const matizurl = [
      {
        id:1,
        type:"Matiz Akumulyator",
        name:"Akumulyator"
      },
      {
        id:2,
        type:"Matiz Bamper",
        name:"Bamperlar"
      },
      {
        id:3,
        type:"Matiz Fara",
        name:"Fara"
      }
     ]
     const nexiaurl = [
      {
        id:1,
        type:"Nexia Akumulyator",
        name:"Akumulyator"
      }
     ]
      useEffect(() => {
        axios.get(`https://guileless-licorice-6ebd82.netlify.app/`)
        .then(balon => setMatiz(balon.data))
        .catch(err =>console.log(err))
    },[])
    const [data,setData] = useState(matiz)

    function chooseCategory(type) {
      if (type === "Barchasi") {
        setData(matiz)
      } else {
        setData(matiz.filter((el) => el.type === type))
      }
    }
    
    
  return (
    <div>
        <div className="headers">
            <div className="shest">
            <Gear/>

            </div>
            <div className="ehtiyot">
              <div className="eng">
              <p>Eng sifatli avtomobil <span>ehtiyot qismlari</span> faqat bizda!</p>
              <button>Mahsulotlar</button>
              </div>
              <div>
                {/* <img className="cobalt"  src="https://s.auto.drom.ru/img5/catalog/photos/fullsize/ravon/gentra/ravon_gentra_294955.jpg" alt="" /> */}
                <img className="ehimg" src="https://static.wixstatic.com/media/bf4bd5_fea4c6d5e24b44c8a413b1a7c8592002~mv2.gif" alt="" />
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
          
          {/* <div className="shini">
              <ul>
                {carurl.map((item) => (
                  <div className="category" onClick={() => chooseCategory(item.type)}>{item.name}</div>
                  // <div className="category">{item.name}</div>

                ))}
                
                
                
              </ul>
          </div> */}
          <div className="chose">
          <div className="tip">

              
              <p>Spark</p>
              <select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
                {
                  sparkurl.map((item) => (
                  <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
                  ))
                }
              </select>
              <p>Matiz</p>
              <select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
                {
                  matizurl.map((item) => (
                  <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
                  ))
                }
              </select>
              <p>Nexia</p>
              <select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
                {
                  nexiaurl.map((item) => (
                  <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
                  ))
                }
              </select>
          </div>
          <div className="fcard">
            <Card props={data} handleClick={handleClick} />
            {/* <Card items={data} handleClick={handleClick} /> */}
          </div>
          </div>
          </div>
            <Footer/>
          
    </div>
  );
}


export default HomePage