import React from "react";
import "./Katalog.css"
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { useState,useEffect } from "react";
import axios from "axios";

const Katalog = ({handleClick}) => {
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

    return(
        <div>
            <div className="shini">
            <div className="katalogtips">

              <div>
<p>Spark</p>
<select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
  {
    sparkurl.map((item) => (
    <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
    ))
  }
</select>
</div>
<div>
<p>Matiz</p>
<select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
  {
    matizurl.map((item) => (
    <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
    ))
  }
</select>
</div>
<div>
<p>Nexia</p>
<select className="chooseBrend" name="brend" onChange={(e) => setOptions(e.target.value)}>
  {
    nexiaurl.map((item) => (
    <option key={item.id} onClick={() => chooseCategory(item.type)} value={item.name}>{item.name}</option>
    ))
  }
</select>
</div>
</div>
            
              <Card props={data} handleClick={handleClick}/>
          </div>
        </div>
    )
}

export default Katalog