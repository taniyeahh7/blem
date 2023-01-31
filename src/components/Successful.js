import React from "react"
import "../css/indexsuccessful.css"
import checkmark from "../images/checkmark.png"
import Navbar from "./Navbar"
// import questionmark from "../images/questionmark.png"

export default function Successful(){
    return(
        <div class="main-succ-div">
            <Navbar/>
            <img src={checkmark}></img>
            <h2>Thank You!</h2>
            <h4>Your order has been received</h4>
        </div>
    )
}