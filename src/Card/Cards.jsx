import "./Card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data.js";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Cards() {
  const [balon,setBalon] = useState([])
  const [matiz,setMatiz] = useState([])
  const [sparkakum,setSparkAkum] = useState([])
  const [nexia,setNexia] = useState([])
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
useEffect(() => {
    axios.get('https://guileless-licorice-6ebd82.netlify.app/spark')
    .then(spark => setSparkAkum(spark.data))
    .catch(err =>console.log(err))
},[])
useEffect(() => {
    axios.get('https://guileless-licorice-6ebd82.netlify.app/nexia')
    .then(spark => setMatiz(spark.data))
    .catch(err =>console.log(err))
},[])


  const product = balon.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}

    />
  ));
  const matiza = matiz.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
    />
  ))
  const sparka = sparkakum.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
    />
  ))
  return (
    <div>
    <div className="Cards">
     
        {sparka}
    </div>
   
    </div>
  );
}