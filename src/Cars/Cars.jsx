import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import CarProps from "./CarProps";
import "./Cars.css"

export default function Cars(){
    const [cars,setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8888/cars')
        .then(cars => setCars(cars.data))
        .catch(err =>console.log(err))
    },[])
    const Cars = cars.map((item) => (
        <CarProps
          name={item.name}
          url={item.imageurl}
        />
      ));
      return(
        <div className="cars">
            {Cars}
        </div>
      )
}