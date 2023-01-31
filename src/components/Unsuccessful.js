import React from "react"
import "../css/indexunsuccessful.css"
// import checkmark from "../images/checkmark.png"
import questionmark from "../images/questionmark.png"
import Navbar from "./Navbar"

export default function Unsuccessful(){
    return(
        <div class="main-succ-div">
            <Navbar/>
            <img src={questionmark}></img>
            <h2>Oops!</h2>
            <h4>Something went wrong on our end, redirecting you back...</h4>
        </div>
    )
}