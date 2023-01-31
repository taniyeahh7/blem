import React, { startTransition } from "react"
import { Link } from "react-router-dom";
// import { isButtonElement } from "react-router-dom/dist/dom";
import "../css/indexintro.css"

export default function Intro(){
    return(
        <div>
            <div className="butts">
                <Link to="/login">
                    <button className="button-login">
                        <p className="login-butt-text">LOG IN</p>
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="button-signup" >
                        <p className="signup-butt-text">SIGN UP</p>
                    </button>
                </Link>    
            </div>
            
            
            <div className="react-parent">
                <div className="introinfo-left">
                    <div className="left-child">
                        <h3>Reliable fast friendly</h3>
                    </div>
                </div>
                <div className="introinfo-right">
                    <div className="right-child">
                        <h4> 
                        Add your friends with a friend recommendation system
                        </h4>
                        <h4>
                        Access their location using our live location access feature
                        </h4>
                        <h4>
                        Choose friend according to proximity or preference
                        </h4>
                        <h4>
                        Send pick-up Request
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


// some useful commands
// cd blem 
// ctrl c in terminal
// npm start 
// npm i react-router-dom 
