import React,{useState} from "react"
import Navbar from "./Navbar"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/indexgetorder.css"

export default function Login(){
    return(
        <div className="login-app">
            <Navbar/>
                <form>
                    <div className="parent-login-container">
                        <div className="input-container">
                            <input type="text" name="productname" placeholder="Product Name" id="productname" className="input-box-1" required/>
                            <hr></hr>
                            <input type="text" name="pickuplocation" placeholder="Pickup Location" id="pickuplocation" className="input-box-2" required/>
                            <hr></hr>
                            <input type="text" name="pickuptime" placeholder="Pickup time" id="pickuptime" className="input-box-3" required/>
                            <hr></hr>
                            <button type="submit" className="button-submit-login">Submit</button>
                        </div> 
                    </div>
                </form>
            
        </div>
    );
}
// productname
// pickuplocation
// orderfor
// ordercollectedby
// hostelblock
// roomnumber
// contactdetails
// orderstatus