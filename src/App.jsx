import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import { BrowserRouter,Routes  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Cars from './Cars/Cars';
import Search from './Search/Search';
import Result from './Search/Results';
import Results from './components/Result';
// import  Def  from './Carousel/Carousel';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        {/* <Route element= {<Navbar/>} path="/" />  */}
        <Route element= {<Card/>} path="/card" /> 
        <Route element= {<Header/>} path="/" /> 
        <Route element= {<Cars/>} path="/cars" /> 
        <Route element= {<Results/>} path="/re" /> 
      </Routes>
    </BrowserRouter>
    
      
   
  );
}

export default App;
