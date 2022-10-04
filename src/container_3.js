import "./container_3.css";
import img2 from './images/Spotify 3 (2).png'
import img3 from './images/Spotify 3 (3).png'
import img4 from './images/Spotify 3 (4).png'
import img5 from './images/Spotify 3 (5).png'
function Container3() {
  return (
    <div className="ts03_main">
        <h1>Connect with Music Culture</h1>
      <div className="sec_main">
        <div className="sec_01">
          <img className="image" src={img2} alt="" />
          <h2>Bollywood Butter</h2>
          <p>The finest quality Bollywood music handpicked for you</p>
        </div>
        <div className="sec_01">
          <img className="image" src={img3} alt="" />
          <h2>Punjabi 101</h2>
          <p>The ultimates punjabi hits</p>
        </div>
        <div className="sec_01">
          <img className="image" src={img4} alt="" />
          <h2>Tollywood Pearls</h2>
          <p>THe finest Music from telgu films</p>
        </div>
        <div className="sec_01">
          <img className="image" src={img5} alt="" />
          <h2>Hot Hits india</h2>
          <p>50 honnest hits from across the globe</p>
        </div>
      </div>
    </div>
  );
}
export default Container3;
