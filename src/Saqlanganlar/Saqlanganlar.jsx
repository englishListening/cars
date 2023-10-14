import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
import Product from "../Card/Product";
import Footer from "../Footer/Footer";
export default  function Saqlanganlar(){
    const [matiz,setMatiz] = useState([])
  useEffect(() => {
      axios.get('https://guileless-licorice-6ebd82.netlify.app/spark_balon')
      .then(balon => setMatiz(balon.data))
      .catch(err =>console.log(err))
  },[])
  const product = matiz.slice(0,6).map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      type={item.type}
      
    />
  ));
    return(
        <div>
            <Navbar/>
            <div className="Cards">

            {product}
            </div>
            <Footer/>
        </div>
        
        
    )
}