import "./Card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data.js";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Card({props,handleClick}) {
  const [balon,setBalon] = useState([])
  const [matiz,setMatiz] = useState([])
  const [data,setData] = useState(matiz)

  const items = props
//   function chooseCategory(type) {
//     if (type === "Barchasi") {
//       setData(matiz)
//     } else {
//       setData(matiz.filter((el) => el.type === type))
//     }
//   }
  
  useEffect(() => {
      axios.get(`https://guileless-licorice-6ebd82.netlify.app/`)
      .then(balon => setMatiz(balon.data))
      .catch(err =>console.log(err))
  },[])
  useEffect(() => {
    axios.get(`https://guileless-licorice-6ebd82.netlify.app/spark`)
    .then(balon => setBalon(balon.data))
    .catch(err =>console.log(err))
},[])
  // const product = balon.slice(0,6).map((item) => (
  //   <Product
  //     name={item.name}
  //     url={item.imageurl}
  //     priccare={item.price}
  //     type={item.type}
      
  //   />
  // ));
//  const Matiz = data.map((item) => (
// <Product key={item.id} props={item} handleClick={handleClick}/>))
// const Balon = balon.map((item) => (
//   <Product key={item.id} props={item} handleClick={handleClick}/> ))
  return (
    <div>
    <div className="Card">
        {/* {
            props.items.map((item) => (
              <Product key={item.id} item={item} handleClick={handleClick}/> 
              ))
            
        } */}
         {items.map((item) => (
        <Product key={item._id} item={item} hands={handleClick} />
      ))}
    </div>
   
    </div>
  );
}