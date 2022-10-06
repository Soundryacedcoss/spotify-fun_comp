
import './container_1.css';
import img1 from './images/spotifylogo.jpg'

function App() {
  return(
   <div className='main'>
<div className='Section_01'>

    <img className='img1' src={img1} alt="Spotify" />
    
    <div className="nav_div_main">
    <div className="nav_div"><a className="nav_link" href="http://">Premium</a></div>
    <div className="nav_div"><a className="nav_link" href="http://">Sports</a></div>
    <div className="nav_div"><a className="nav_link" href="http://">Download</a></div>
    <div className="nav_div"><a className="nav_link" href="http://">Sign-Up</a></div>
    <div className="nav_div"><a className="nav_link" href="http://">Login</a></div>
    </div>
    </div>
    <div className='section_02'>
        <h2 id="Offer">Get Premium Free for 2 month</h2>
        <br />
        <p>just Rs 119/month after . Debit and credit card accepted.Cencel anytime</p>
        <button id="bt1">Get Started</button>
        <button id="bt2">See Other Plans</button>
        <div id="sugeestion_premium">
        <p id="condition"> <a className="link3" href="http://#">Term and condition Apply.</a>1 month free not available for users who have already tried premium</p>
        </div>
    </div>
    <div className="section_03">
        <h2 id="head2">Introducting Premium mini</h2>
        <p id="Offer2">Rs 7 for 1 day</p>
        <p id="Offer3">Rs 25 For 7 Days</p>
        <button id="bt3">Get Mini</button>
        <br></br><br></br>
        <a className="link3" href="http://#">Term and condition apply</a>
    </div>
   </div>
  );
}

export default App;
