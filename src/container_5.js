import './container5.css'
import $ from 'jquery'
function Container5(){
    var arr=()=>{
    $("#contant01").toggle();
}

    return(
        <div className='tsk_05_div1'>
            <h2>Questions</h2>
            <p>We've got answer</p>
            <div className="flex">
                <div>
                    <h3>What is spotify and spotify premium </h3>
                </div>
                <div>
                <h2><span onClick={arr}  className="sp1">&#8595;</span></h2>
                </div>
                
            </div>
            <p className="contant" id="contant01">Lorem ipsum dolor sit.</p>
            <hr />
            <div className="flex">
                <div>
                    <h3>How do i cancel </h3>
                </div>
                <div>
                <h2><span onClick={arr}  className="sp1">&#8595;</span></h2>
                </div>
            </div>
            <hr />
            <div className="flex">
                <div>
                    <h3>how does the duo and family plan work</h3>
                </div>
                <div>
                <h2><span  className="sp1">&#8595;</span></h2>
                </div>
            </div>
            <hr />
            <div className="flex">
                <div>
                    <h3>how many devices can i listen too?</h3>
                </div>
                <div>
                <h2><span className="sp1">&#8595;</span></h2>
                </div>
            </div>
            <hr />
            <div className="flex">
                <div>
                    <h3>how does the student plan work</h3>
                </div>
                <div>
                <h2><span  className="sp1">&#8595;</span></h2>
                </div>
            </div>
            <hr />   
        </div>
    );
}
export default Container5;