import React from "react"
import "../css/indexunsuccessful.css"
// import checkmark from "../images/checkmark.png"
import questionmark from "../images/questionmark.png"

export default function Unsuccessful(){
    return(
        <div class="main-succ-div">
            <img src={questionmark}></img>
            <h2>Oops!</h2>
            <h4>Something went wrong on our end, redirecting you back...</h4>
        </div>
    )
}