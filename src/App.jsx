import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import { BrowserRouter,Routes  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cars from './Cars/Cars';
import Search from './Search/Search';
import Result from './Search/Results';
import Results from './components/Result';
import Katalog from './Katalog/Katalog';
import HomePage from './HomePage/HomePage';
import Saqlanganlar from './Saqlanganlar/Saqlanganlar';
import Balonlar from './Parts/Balonlar';
import Akumuluyatorlar from './Parts/Akumulyator';
import Faralar from './Parts/Fara';
import Bamperlar from './Parts/Bamper';
// import  Def  from './Carousel/Carousel';
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
           <Route element= {<Balonlar/>} path="/balonlar" /> 
           <Route element= {<Akumuluyatorlar/>} path="/akumulyatorlar" /> 
           <Route element= {<Faralar/>} path="/faralar" /> 
           <Route element= {<Bamperlar/>} path="/bamperlar" /> 
            <Route element= {<HomePage/>} path="/" /> 
            <Route element= {<Katalog/>} path="/katalog" /> 
            <Route element= {<Saqlanganlar/>} path="/saqlanganlar" /> 
      </Routes>
    </BrowserRouter>
    
      
   
  );
}

export default App;
