import '../style/LoginStyles.css';
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import pk from "../img/pk.jpg"
import { Button } from 'react-bootstrap';
import {useState} from "react";
import SignUpUserService from '../services/SignUpUserService';

const Signup = () => {

  
  
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [email,setemail]=useState("")
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [phoneNumber,setphoneNumber]=useState("")
  const [role,setrole]=useState([])
  

  var arr=[]

  const navigate = useNavigate();

  const signUpUsers = (e)=>{
    e.preventDefault();
    const signup = {firstName,lastName,email,username,password,phoneNumber,role}

    SignUpUserService.signUser(signup)
        .then(
            (response) => {

            console.log(response.data)    
            navigate('/')
        }
        )
        .catch(
            error => {
            console.log(error)
        }
        )

  }


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
            <input 
            type="text" 
            className="form-control" 
            placeholder="First name" 
            name = "firstName"
            value = {firstName}
            onChange = {(e) => setfirstName(e.target.value)} 
            />
        </div>
        <div className="form-group">
            <label>Last name</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Last name"
            name = "lastName"
            value = {lastName}
            onChange = {(e) => setlastName(e.target.value)} 
            />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            name = "email"
            value = {email}
            onChange = {(e) => setemail(e.target.value)} 
            />
        </div>
        <div className="form-group">
            <label>UserName</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter userName"
            name = "username"
            value = {username}
            onChange = {(e) => setusername(e.target.value)}  
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password"
            name = "password"
            value = {password}
            onChange = {(e) => setpassword(e.target.value)} 
            />
        </div> 
        <div className="form-group">
            <label>Phone Number</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter phone number"
            name = "phoneNumber"
            value = {phoneNumber}
            onChange = {(e) => setphoneNumber(e.target.value)} 
            />
        </div>
        <div className="form-group">
          <label>Select your role type:</label>
          <br />

            <label><input type="checkbox" name="role" value="admin" 
            onChange={
              (e)=>{
                if(e.target.checked){
  
                  arr.push(e.target.value)
                  console.log(arr)
                }
                  
              }
            }  
            />ADMIN</label>

            <label><input type="checkbox" name="role" value="manager"
                        onChange={
                          (e)=>{
                            if(e.target.checked){
              
                              arr.push(e.target.value)
                              console.log(arr)
                            }
                              
                          }
                        } 
            />MANAGER</label>

            <label><input type="checkbox" name="role" value="user" 
                        onChange={
                          (e)=>{
                            if(e.target.checked){
                              arr.push(e.target.value)
                              console.log(arr)
                            }
                              
                          }
                        }
            />USER</label>
        </div>
        
        
        <Button onClick={(e)=>{
          setrole(arr)
          signUpUsers(e)}} type="submit" className="btn btn-primary btn-block" size="lg">Sign Up</Button>
        <p className="forgot-password text-right">
           <b style={{color:"red"}}>Already registered</b>  <Link to="/" style={{color:"black"}}>sign in?</Link>
        </p>
    </form> 
    
    </div>  
    <br /> 
    <br />  <br /> <br /><br /> <br /> <br /><br /><br />    
    </div>
      );
}
 
export default Signup;