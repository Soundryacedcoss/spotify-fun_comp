import './container5.css'
import $ from 'jquery'
function Container5(){
    var arr=()=>{
    $("#contant01").toggle();
    // $("#contant1").toggle();
    // $("#contant2").toggle();
    // $("#contant3").toggle();
    // $("#contant4").toggle();
    }

    return(
        <div className='tsk_05_div1'>
            <h2>Questions</h2>
            <p>We've got answer</p>
            <b>What is spotify and spotify premium <span onClick={arr}  className="sp1">&#8595;</span></b>
            <p className="contant" id="contant01">Lorem ipsum dolor sit.</p> 
            <hr />
            <b>How do i cancel<span onClick={arr} className="sp1">&#8595;</span> </b>
            <p className="contant" id="contant1">Lorem ipsum dolor sit.</p>
            <hr />
            <b>how does the duo and family plan work <span className="sp1">&#8595;</span> </b>
            <p className="contant" id="contant2">Lorem ipsum dolor sit.</p>
            <hr />
            <b>how many devices can i listen too? <span className="sp1">&#8595;</span> </b>
            <p className="contant" id="contant3">Lorem ipsum dolor sit.</p>
            <hr />
            <b>how does the student plan work <span className="sp1">&#8595;</span> </b>
            <p className="contant" id="contant4">Lorem ipsum dolor sit.</p>
            <hr />   
        </div>
    );
}
export default Container5;