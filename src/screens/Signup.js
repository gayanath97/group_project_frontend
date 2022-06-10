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
  const [rol,setrol]=useState("")
  

  var arr=[]
  var arr2 = [""]

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
        
        // backgroundImage:`url(${pk})`,
        backgroundSize:"cover",
        
        
      }}>
          <br />
          <br /> <br /> <br />
        <div style={{

        width:400,
        margin: "auto",
        alignContent : "center",
        // border: "dashed",
        // borderColor:"red"
          
       }}>
       
        {/* <form style={{backgroundColor:"orange"}}> */}
        <form>
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

        <div >
             <input onClick={(e)=>{arr=[];arr.push(e.target.value);console.log("arr____"+arr+",role___"+role)}} type="radio" value="admin" name="role"  /> Admin
             <input onClick={(e)=>{arr=[];arr.push(e.target.value);console.log("arr____"+arr+",role___"+role)}} type="radio" value="manager" name="role"  /> Manager
             <input onClick={(e)=>{arr=[];arr.push(e.target.value);console.log("arr____"+arr+",role___"+role)}} type="radio" value="user" name="role"  /> User
        </div>
        {/* <div className="form-group">

          <label>Select your role type:</label>
          <br />

            <label><input type="radio" name="role" value="admin" 
            onChange={
              (e)=>{
                if(e.target.checked){
  
                  arr.push(e.target.value)
                  role.push(e.target.value)
                  console.log(arr)
                 
                 
                }
                  
              }
            }  
            />ADMIN</label>

            <label><input type="radio" name="role" value="manager"
                        onChange={
                          (e)=>{
                            if(e.target.checked){
              
                              arr.push(e.target.value)
                              role.push(e.target.value)
                              console.log(arr)
                              
                              
                            }
                              
                          }
                        } 
            />MANAGER</label>

            <label><input type="radio" name="role" value="user" 
                        onChange={
                          (e)=>{
                            if(e.target.checked){
                              arr.push(e.target.value)
                              role.push(e.target.value)
                              console.log(arr)
                                    
                            }
                              
                          }
                        }
            />USER</label>
        </div> */}
        
        
        <Button onClick={(e)=>{
          role[0]=arr[0];
          console.log(arr)
          console.log(role)
          signUpUsers(e)
          }} 
          type="submit" className="btn btn-primary btn-block" size="lg">Sign Up</Button>
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