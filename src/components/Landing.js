import React from "react"
import Navbar from "./Navbar"
import bhai from "../images/bhai1.png"
import Group31 from "../images/Group31.png"
import Group30 from "../images/Group30.png"
import "../css/indexlanding.css"
import {BrowserRouter, Route, Link } from "react-router-dom";

export default function Landing(){
    return(
        <div>
            {/* <section className="nav-section">
                <Navbar />
            </section> */}

    <section className="button-section">
        <Link to="/order">
            <div className="req-order">
                <button class="button-3">  
                    <img src={bhai}/>
                    <p>Request Order Pickup</p>
                </button>
            </div>
        </Link>
        
        <div class="add-my-act">
            <button class="button-1">
                <img src={Group30}/>
                <p>Add Friends</p>
            </button>
            
            <button class="button-2">
                <Link to="postmyact1">
                    <img src={Group31}/>
                    <p>My Activity</p>
                </Link>
            </button>
            
        </div>
    </section>
        </div>
        
    )
}

// orders delivered
// orders requested