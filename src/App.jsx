import './App.css';
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
import SignUp from './Authentication/SignUp';
// import  Def  from './Carousel/Carousel';
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const arr = [ ]
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    // cart.push(item)
  };

  const [balon,setBalon] = useState([])
  useEffect(() => {
    axios.get(`https://guileless-licorice-6ebd82.netlify.app/`)
    .then(balon => setBalon(balon.data))
    .catch(err =>console.log(err))
},[])
  const sor = 
    {
      _id:1,
      name:"Matiz",
      type:"Chevrolet",
      price:"320",
    }
  

  return (
    
      <BrowserRouter>
        {/* <Navbar setShow={setShow} size={cart.length} />
        <Cart cart={cart} setCart={setCart}/> */}
        <Routes>
            
            <Route element= {<Home/>} path="/" /> 
            <Route element= {<Katalogs />} path="/katalog" /> 
            <Route element= {<Saqlanganlar/>} path="/saqlanganlar" /> 
            <Route element= {<CardPage props={sor}/>} path={"page"}/> 

      </Routes>
    </BrowserRouter>
    
      
   
  );
}

export default App;
