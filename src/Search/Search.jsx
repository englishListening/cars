import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Props from "./Props";
import "./Search.css"
import { json } from "react-router-dom";

export default function Search({setResults}){
   const [input , setInput] = useState("");

   const fetchData = (value) => {
    fetch("http://localhost:8888")
      .then((response => response.json()))
      .then((json) => {
        const results = json.filter((car)=>{
          return car && car.name && car.name.toLowerCase().includes(value)
        });
        setResults(results)
      })
   }
   const handleChange = (value) => {
    setInput(value)
    fetchData(value)
   }
   const X = (e) => {
    e.preventDefault()
    setInput(e)
    fetchData(e)

   }
    // const Cars = cars.filter((item) => {
    //     return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
    // }).map((item) => (
    //     <Props
    //       name={item.name}
    //       type={item.type}
    //     />
    //   ));
      return(
        <div className="cars">
            <form action="">
                <input type="text" className="input" value={input} onChange={(e) => handleChange(e.target.value)}
                placeholder="Search..."
                />
                <button onChange={(e) => handleChange(e.target.value = "")}>X</button>
            </form>
            
        </div>
      )
}