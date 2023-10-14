import "./Card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data.js";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Card() {
  const [balon,setBalon] = useState([])
  const [matiz,setMatiz] = useState([])
  useEffect(() => {
      axios.get('https://guileless-licorice-6ebd82.netlify.app/')
      .then(balon => setBalon(balon.data))
      .catch(err =>console.log(err))
  },[])
  useEffect(() => {
    axios.get('https://guileless-licorice-6ebd82.netlify.app/matiz')
    .then(matiz => setMatiz(matiz.data))
    .catch(err =>console.log(err))
},[])


  const product = balon.slice(0,6).map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
      
    />
  ));
  const matiza = matiz.slice(0,6).map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
    />
  ))
  return (
    <div>
    <div className="Card">
     
        {matiza}
    </div>
    {/* <div className="Card">
     <a className="as" href=""> <h1>Matiz Akumuluyatorlar {">>"}</h1></a>
      <Carousel showDots={true} responsive={responsive}>
        {matiza}
      </Carousel>
    </div> */}
    </div>
  );
}