import React from "react"
import "../css/indexpostmyact1.css"
import {BrowserRouter, Route, Link } from "react-router-dom";
// import {ordersdelimg} from "../images/.png"
// import {ordersreqimg} from "../images/.png"
export default function PostMyActivity1(){
    return(
        <div>
            <h1>hihis</h1>
            <div class="orders-delivered">
                {/* <img src={}></img> */}
                <p>Orders Delivered</p>
            </div>
            <div class="orders-placed">
                {/* <img src={}></img> */}
                <p>Orders Placed</p>
            </div>
        </div>
    )
}
