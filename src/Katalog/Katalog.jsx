import React from "react";
import Navbar from "../Navbar/Navbar";
import Cards from "../Card/Cards";
import Footer from "../Footer/Footer";

const Katalog = () => {
    return(
        <div>
            <Navbar/>
            <div className="shini">
              <ul>
                <li><a href="/balonlar">Balonlar</a></li>
                <li><a href="/akumulyatorlar">Akumulyator</a></li>
                <li><a href="/bamperlar">Bamperlar</a></li>
                <li><a href="/faralar">Faralar</a></li>
                <li><a href="">Oynalar</a></li>
                <li><a href="">Moy</a></li>
                <li><a href="">Aksesuarlar</a></li>
                
              </ul>
              <Cards/>
          </div>
          <Footer/>
        </div>
    )
}

export default Katalog