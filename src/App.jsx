import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter,Routes  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Saqlanganlar from './Saqlanganlar/Saqlanganlar';
import Home from './Home/Home';
import Katalogs from './Katalog/Katalogs';
import Gear from './Animations/Gear';
import Car from './Animations/Car';
import CardPage from './CardPage/CardPage';
import axios from 'axios';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import AboutUs from './BizHaqimizda/AboutUs';
import HomePage from './HomePage/HomePage';
import Cart from './Saqlanganlar/Cart';
import Navbar from './Navbar/Navbar';
import Katalog from './Katalog/Katalog';
import Footer from './Footer/Footer';
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  

  return (
    
      <BrowserRouter>
      <Navbar setShow={setShow} size={cart.length} />
      <React.Fragment>
      {show ? (
      <Routes>
        <Route element= {<HomePage handleClick={handleClick} />} path="/" /> 
        <Route element= {<Katalog handleClick={handleClick} />} path="/katalog" /> 
            
      </Routes>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
            

      </React.Fragment>
       <Routes>
            {/* <Route element= {<CardPage props={cart}/>} path={`/katalog`}/>  */}
            <Route element= {<Login/>} path="/login" /> 
            <Route element= {<Signup/>} path="/signup" /> 
            <Route element= {<AboutUs/>} path="/haqida" /> 
            <Route element= {<CardPage handleClick={handleClick}/>} path="/katalog/:id" /> 
       </Routes>
       <Footer/>
    </BrowserRouter>
    
      
   
  );
}

export default App;
