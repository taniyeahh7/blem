import React from "react"
import "../css/indexpostmyact1.css"
import {BrowserRouter, Route, Link } from "react-router-dom";
import orderdelivered from "../images/orderdelivered.png"
import orderplaced from "../images/orderplaced.png"
// import Navbar from "./Navbar"

export default function Postmyactivity(){
    return(
        <div class="two-options">
            {/* <Navbar/> */}
            <div class="orders-delivered">
                <button class="button-left">
                    <Link to="/successful">
                        <img src={orderdelivered}></img>
                        <p>Orders Delivered</p>
                    </Link>
                </button>
            </div>
            <div class="orders-placed">
                <button class="button-right">
                    <Link to="/unsuccessful">
                        <img src={orderplaced} class="image-right"></img>
                        <p>Orders Placed</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}
