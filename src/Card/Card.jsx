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
      axios.get('http://localhost:8888/')
      .then(balon => setBalon(balon.data))
      .catch(err =>console.log(err))
  },[])
  useEffect(() => {
    axios.get('http://localhost:8888/matiz')
    .then(matiz => setMatiz(matiz.data))
    .catch(err =>console.log(err))
},[])
  const product = balon.slice(0,7).map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
    />
  ));
  const matiza = matiz.slice(0,7).map((item) => (
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
     <a className="as" href=""> <h1>Akumuluyatorlar {">>"}</h1></a>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
    <div className="Card">
     <a className="as" href=""> <h1>Matiz Akumuluyatorlar {">>"}</h1></a>
      <Carousel showDots={true} responsive={responsive}>
        {matiza}
      </Carousel>
    </div>
    </div>
  );
}