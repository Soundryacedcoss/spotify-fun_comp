import "./container6.css";
import img from "./images/spotifylogo.jpg";
import img1 from "./images/logo_01.jpg";
function Container6() {
  return (
    <div className="tsk_06">
        <div className="tsk_06_main">
          <div className="tsk_06_sec_01">

            <img id="img1" src={img} alt="" />
            <div className="list_div">
              <ul className="ul">
                <li className="li_clss , head">
                  <b>Company</b>
                </li>
                <li className="li_clss">About</li>
                <li className="li_clss">Job</li>
                <li className="li_clss">For the job</li>
              </ul>
            </div>
            <div className="list_div">
              <ul className="ul">
                <li className="li_clss , head">
                  {" "}
                  <b>Community</b>{" "}
                </li>

                <li className="li_clss">Developer</li>
                <li className="li_clss">Advertising</li>
                <li className="li_clss">Investors</li>
                <li className="li_clss">Venders</li>
              </ul>
            </div>
            <div className="list_div">
              <ul className="ul">
                <li className="li_clss , head">
                  {" "}
                  <b>Company</b>
                </li>
                <li className="li_clss">About</li>
                <li className="li_clss">Job</li>
                <li className="li_clss">For the job</li>
              </ul>
            </div>
            <div className="list_div">
              <ul className="ul">
                <li className="li_clss , head">
                  {" "}
                  <b> Usefull</b>
                </li>
                <li className="li_clss">Support</li>
                <li className="li_clss">web players</li>
                <li className="li_clss">Free mobiles app</li>
              </ul>
            </div>
            <div className="tsk_06_sec_02">
            <img id="img2" src={img1} alt="" />
          </div>
          </div>

          {/* <div className="tsk_06_sec_02">
            <img id="img2" src={img1} alt="" />
          </div> */}
        </div>
        <div className="foot_div">
          <footer>
            <div className="div_01_foot">
              <p className="paragraph">Legal</p>
              <p className="paragraph">Privacy-center</p>
              <p className="paragraph">Privacy-policy</p>
              <p className="paragraph">Cokies</p>
              <p className="paragraph">Ads</p>

              <div className="sym_div">
                <p>🌏India ©Spotify Ab</p>
              </div>
            </div>
          </footer>
        </div>
          
      
     
    </div>
  );
}
export default Container6;
