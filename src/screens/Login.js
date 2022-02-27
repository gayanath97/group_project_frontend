 
import '../style/LoginStyles.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import pk from "../img/pk.jpg"
import { Button } from 'react-bootstrap';

const Login = () => {

    return (  
      <div style={{
        
        backgroundImage:`url(${pk})`,
        backgroundSize:"cover",
          
      }}>
          <br />
          <br /> <br /> <br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
        <div style={{

        width:400,
        margin: "auto",
        alignContent : "center",
        border: "dashed",
        borderColor:"red"
          
       }}>
       
        <form style={{backgroundColor:"orange"}}>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>User name</label>
            <input type="text" className="form-control" placeholder="User name" />
        </div>

        <div className="form-group">
            <label>password</label>
            <input type="text" className="form-control" placeholder="Password" />
        </div> 
        
        <Link to="/"><Button type="submit" className="btn btn-primary btn-block" size="lg" >Sign In</Button></Link>
        <p className="forgot-password text-right">
           <b style={{color:"red"}}>Not registered</b>  <Link to="/signup" style={{color:"black"}}>sign Up?</Link>
        </p>
        
        <p className="forgot-password text-right">
           <b style={{color:"red"}}>Forgotten Password</b>  <Link to="/forgottenpassword" style={{color:"black"}}>verify?</Link>
        </p>
    </form> 
    
    </div> 

    <br /> 
    <br />  <br /> <br /><br /> <br /> <br /><br /><br />  

    </div>
      );
}
 
export default Login;