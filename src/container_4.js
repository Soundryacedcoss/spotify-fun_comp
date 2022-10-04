import "./container_4.css";
import img1 from "./images/payment-logo.png";

function Container4() {
  return (
    <div className="tsk_04_main">
      <div className="task_04_sec_01">
      <h1>Pick your Premium</h1>
      <p>Listen without limit on your phone speaker or on other devices</p>
      <img id="image" src={img1} alt="" /></div>
    <div className="all_sec">
      <div className="sec_main_01_tsk_04">
        <button className="One_time_plan_bt">One-time plans available</button>
        <h2>Mini</h2>
        <p>
          From <span>&#8377;</span>7/day 
          
        </p>
        <p>1 account</p>
        <br></br>
        <hr></hr>
        <p><b className="check_mark">&#x2713;</b>ad free music listening on mobile</p>
        <p><b className="check_mark">&#x2713;</b>Group session</p>
        <p><b className="check_mark">&#x2713;</b>Download 30 song on 1 devices</p>
        <br></br><br></br><br></br><br></br><br></br>
        <button className="View_plan_bt">View Plans</button>
        <br></br><br></br><br></br><br></br>
        <a href="http://">Term And condition apply</a>
      </div>
      <div className="sec_main_01_tsk_04">
        <button className="free_bt">1 month free</button>
        <br></br>
        <button className="One_time_plan_bt">One-time plans available</button>
        <h2>Indivisual</h2>
        <p>
          <span>&#8377;</span>119/month after offer period
        </p>
        <p>1 acounts</p>
        <hr></hr>
        
        <p><b className="check_mark">&#x2713;</b>ad-free music listning</p>
        <p> <b className="check_mark">&#x2713;</b>Group session</p>
        <p><b className="check_mark">&#x2713;</b>Download 10k songs/device on 5 devices</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="View_plan_bt">View Plans</button>
        <p>
        <br></br>
        <br></br>
          <a href="http://">Term And condition apply</a>1 month free not
          available for user who has already tried premium
        </p>
      </div> 
      <div className="sec_main_01_tsk_04">
        <button className="free_bt">1 month free</button>
        <br></br>
        <button className="One_time_plan_bt">One time plans available</button>
        <h2>Duo</h2>
        <p>
          <span>&#8377;</span>119/mounth after offer period
        </p>
        <p>2 accounts</p>
        <hr></hr>
        <p><b className="check_mark">&#x2713;</b>For couples who lived togather</p>
        <p><b className="check_mark">&#x2713;</b>ad free music listning</p>
        <p><b className="check_mark">&#x2713;</b>Group session</p>
        <p><b className="check_mark">&#x2713;</b>Download 10k songs/device on 5 devices</p>
        <br></br>
        <br></br>
        <button className="View_plan_bt">View Plans</button>
        <p>
        <br></br>
        <br></br>
          <a href="http://">Term And condition apply</a>1 month free not
          available for user who has already tried premium
        </p>
       </div>
      <div className="sec_main_01_tsk_04">
        <button className="free_bt">one month free</button>
        <br></br>
        <button className="One_time_plan_bt">one time plans available</button>
        <h2>Family</h2>
        <p>
          <span>&#8377;</span>179/mounth after offer period
        </p>
        <p>up-to 6 account</p>
        <hr></hr>
        <p><b className="check_mark">&#x2713;</b>For family who live togather</p>
        <p><b className="check_mark">&#x2713;</b>Block Explicit music</p>
        <p><b className="check_mark">&#x2713;</b>ad free music listning</p>
        <p><b className="check_mark">&#x2713;</b>Group session</p>
        <p>Download 10k songs/device on 5 devices</p>
       
        <button className="View_plan_bt" id="View_plan_bt_id">View Plans</button>
        <p>
        <br></br>
        <br></br>
          <a href="http://">Term And condition apply</a>1 month free not
          available for user who has already tried premium
        </p>
      </div>
    </div>
    <div className="tsk_04_last_sec">
     <h2>Special discount for eligible student in university <button className="learn_bt">Learn More</button> </h2>
    </div>
  </div>
  );
}
export default Container4;
