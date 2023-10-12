import React from "react"; 
import './Navbar.css'
import zap from "./zap.png"
const Navbar = () =>{
    
   
     return(
        <div>
            <div className="bg-color">
                <header className="container">
                    
                    <a href="/"><b className="logo">UzMashina</b></a>
            <div className="burger">
                    
            </div>
            <div className="nav-links">
                <ul>
                   <li><a href="">Bamper</a></li> 
                   <li><a href="">Balon</a></li> 
                   <li><a href="">Do`konlar</a></li> 
                   <li><a href="">Biz haqimizda</a></li> 
                </ul>
                <div className="search">
                    
                    <input type="text" placeholder="Enter something..."/>
                    <button>Search</button>
                    
                
                </div>
            </div>
                   
                </header>
                <div className="NavText"> 
                    <h1>Kerakli mashina qismlarini faqat shu yerdan topasiz</h1>
                    <img src={zap} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar