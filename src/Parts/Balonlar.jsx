import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
import Product from "../Card/Product";
import Footer from "../Footer/Footer";
export default  function Balonlar(){
    const [matiz,setMatiz] = useState([])
  useEffect(() => {
      axios.get('https://guileless-licorice-6ebd82.netlify.app/spark_balon')
      .then(balon => setMatiz(balon.data))
      .catch(err =>console.log(err))
  },[])
  const product = matiz.map((item) => (
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
            <h1 className="H11">Balonlar</h1>
            <div className="Cards">

            {product}
            </div>
            <Footer/>
        </div>
        
        
    )
}