import './Carosel.css'
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
const Def = () => {
  var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5500);
  return (
    <div className='body'>
       <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>

        <div className="slide first">
          <img src={one} alt="" />
        </div>
        <div className="slide">
        <img src={two} alt="" />
        </div>
        <div className="slide">
        <img src={three} alt="" />
        </div>
        <div className="slide">
        <img src={four} alt="" />
            
        </div>
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
     
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
      </div>
      
    </div>
    </div>
  )
}

export default Def