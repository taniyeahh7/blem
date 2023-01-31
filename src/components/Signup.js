import React,{useState} from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/indexsignup.css"

export default function Signup(){
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
    //         <form on Submit={handleSubmit}>
    //             <div className="parent-login-container">
    //                 <div className="input-container">
    //                     <input type="text" name="uname" placeholder="Username" id="name" className="input-box-1" required/>
    //                     {renderErrorMessage("uname")}
    //                     <hr></hr>
    //                 {/* </div> */}
                        
    //                 {/* <div className="input-container"> */}
    //                     {/* <label>Password</label> */}
    //                     <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-2" required/>
    //                     {renderErrorMessage("pass")}
    //                     <hr></hr>
                        
    //                 {/* </div> */}
    //                 {/* <div className="input-container"> */}
    //                     <button type="submit" className="button-submit-login">Submit</button>
    //                 </div> 
                
    //             </div>
    //         </form>
    //     </div>
    // )
    return(
        <div className="login-app">
            
                <form>
                    <div className="parent-signup-container">
                        <div className="input-signup-container">
                            <input type="text" name="name" placeholder="Name" id="name" className="input-box-1" required/>
                            <hr></hr>
                            <input type="text" name="uname" placeholder="Username" id="uname" className="input-box-2" required/>
                            <hr></hr>
                            <input type="text" name="regno" placeholder="Registration No." id="regno" className="input-box-3" required/>
                            <hr></hr>
                            <input type="text" name="hostelblock" placeholder="Hostel Block" id="hostelblock" className="input-box-4" required/>
                            <hr></hr>
                            <input type="text" name="email" placeholder="Email" id="email" className="input-box-5" required/>
                            <hr></hr>
                            <input type="text" name="mobile" placeholder="Mobile" id="mobile" className="input-box-6" required/>
                            <hr></hr>
                            <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-7" required/>
                            <hr></hr>
                            <button type="submit" className="button-submit-signup">Submit</button>
                        </div> 
                    </div>
                </form>
            
        </div>
    );
}
