import '../style/LoginStyles.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import pk from "../img/pk.jpg"
import { Button } from 'react-bootstrap';

const Signup = () => {
    return (  
      <div style={{
        
        backgroundImage:`url(${pk})`,
        backgroundSize:"cover",
        
        
      }}>
          <br />
          <br /> <br /> <br />
        <div style={{

        width:400,
        margin: "auto",
        alignContent : "center",
        border: "dashed",
        borderColor:"red"
          
       }}>
       
        <form style={{backgroundColor:"orange"}}>
        <h3>Sign Up</h3>
        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
            <label>UserName</label>
            <input type="text" className="form-control" placeholder="Enter userName" />
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="Enter phone number" />
        </div>
        <div className="form-group">
          <label>Select your role type:</label>
          <br />
            <label><input type="radio" name="a" value="ADMIN" checked={true} />ADMIN</label>
            <label><input type="radio" name="a" value="MANAGER"  />MANAGER</label>
            <label><input type="radio" name="a" value="NON-MANAGER"  />NON-MANAGER</label>
        </div>
        
        
        <Link to="/signin"><Button type="submit" className="btn btn-primary btn-block" size="lg">Sign Up</Button></Link>
        <p className="forgot-password text-right">
           <b style={{color:"red"}}>Already registered</b>  <Link to="/signin" style={{color:"black"}}>sign in?</Link>
        </p>
    </form> 
    
    </div>  
    <br /> 
    <br />  <br /> <br /><br /> <br /> <br /><br /><br />    
    </div>
      );
}
 
export default Signup;