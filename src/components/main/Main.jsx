import React from "react";
import './Main.css';
import { assets } from "../../assets/assets";

const Main=()=>{
   return(
    <div className="main">
        <div className="nav">
            <p> Gemini </p>
            <img src={assets.p_p} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
             <p><span>Hello Anees</span></p>
             <p>How can i help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                <p>How to Center a div in CSS?</p>
                <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                <p>How to make a Responsive Navbar?</p>
                <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                <p>What is the roadmap to learn DevOps?</p>
                <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                <p>What is the full form of CSS?</p>
                <img src={assets.message_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="searchbox">
                    <input type="text" name="" id="" placeholder="Enter a prompt here...." />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <div className="bottom-info">
                    Gemini may produce inaccurate info,including about people so please  double check it
                </div>
            </div>
        </div>
    </div>
   )
}

export default Main