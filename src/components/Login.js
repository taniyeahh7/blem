import React,{useState} from "react"
import Navbar from "./Navbar"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/indexlogin.css"

export default function Login(){
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const database=[
    //     {
    //         username:"anushk pandey",
    //         password:"ap"
    //     },
    //     {
    //         username:"johndoe",
    //         password:"jd"
    //     }
    // ];

    // const errors={
    //     uname:"invalid username",
    //     pass:"invalid password"
    // };

    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    //     var {uname,pass}=document.forms[0];
    //     const userData=database.find((user)=>user.username===uname.value);
    //     if(userData){
    //         if(userData.password!==pass.value){
    //             setErrorMessages({name:"pass",message:errors.pass});
    //         }
    //         else{
    //             setIsSubmitted(true);
    //         }
    //     }
    //     else{
    //         setErrorMessages({name:"uname",message:errors.uname});
    //     }
    // };

    // const renderErrorMessage=(name)=>
    // name===errorMessages.name && (
    //     <div className="error">{errorMessages.message}</div>
    // );

    // const renderForm=(
    //     <div>
            
    //     </div>
    // )
    return(
        <div className="login-app">
            <form>
            {/* <form on Submit={handleSubmit}> */}
                <div className="parent-login-container">
                    <div className="input-container">
                        <input type="text" name="uname" placeholder="Username" id="name" className="input-box-1" required/>
                        {/* {renderErrorMessage("uname")} */}
                        <hr></hr>
                        <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-2" required/>
                        {/* {renderErrorMessage("pass")} */}
                        <hr></hr>
                        <Link to="/landing">
                            <button type="submit" className="button-submit-login">Submit</button>
                        </Link>
                    </div> 
                
                </div>
            </form>
        </div>
    );
}