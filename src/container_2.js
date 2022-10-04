import './container_2.css';
import img2 from './images/comp_02_img_01.png'
import img3 from './images/comp_02_img_02.png'
import img4 from './images/comp_02_img_03.png'
import img5 from './images/comp_02_img_04.png'

function Container2(){
    return(
        <div className='ts_02_sec_01'>
         <h2 id='ts_02_head'>The power of premium</h2>
         <div className='tsk_02_main'>
            <div className='tsk_01_div'>
                <img className="imge" src={img2} alt=''/>
                <h2>Ad-Free Music listening</h2>
                <p>Enjoy Unintrpted music</p>
            </div>
            <div className='tsk_01_div'>
                <img className="imge" src={img3} alt=''/>
                <h2>Offline Playback</h2>
                <p>Save your data by listning offline</p>
            </div>
            <div className='tsk_01_div'>
                <img className="imge" src={img4} alt=''/>
                <h2>Play Everywhere</h2>
                <p>Listen on your speaker tv and other devices</p>
            </div>
            <div className='tsk_01_div'>
                <img className="imge" src={img5} alt=''/>
                <h2>Pay your Way</h2>
                <p>prepay with paytem UPI abd More</p>
            </div>
         </div>
        </div>
    );
}
export default Container2;