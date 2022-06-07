import '../style/screens/Signup.css';
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
        <div className="main">
    <p className="sign" align="center">Sign up</p>
    <form className="form1" />
      <input className="un " type="text" align="center" placeholder="First Name" value = {firstName}
            onChange = {(e) => setfirstName(e.target.value)} />
      <input className="un " type="text" align="center" placeholder="Last Name" value = {lastName} onChange = {(e) => setlastName(e.target.value)} />
      <input className="un " type="text" align="center" placeholder="Email" value = {email}
            onChange = {(e) => setemail(e.target.value)} />
      <input className="un " type="text" align="center" placeholder="Username" value = {username}
            onChange = {(e) => setusername(e.target.value)}  />
      <input className="pass" type="password" align="center" placeholder="Password"  value = {password}
            onChange = {(e) => setpassword(e.target.value)} />
      <input className="un " type="text" align="center" placeholder="Phone Number"  value = {phoneNumber}
            onChange = {(e) => setphoneNumber(e.target.value)} />
      <input className="un " type="text" align="center" placeholder="Role" />
      <div className="un">
          <label>Select your role type:</label>
          <br />

            <label><input type="checkbox" name="role" value="admin" 
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
            <label><input type="checkbox" name="role" value="manager"
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
            <label><input type="checkbox" name="role" value="user" 
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
        </div>
        <Button onClick={(e)=>{
          console.log(arr)
          setrole(arr)
          console.log(role)
          signUpUsers(e)
          }} 
          type="submit" className="un" size="lg">Sign Up</Button>
        <p className="un">
           <b style={{color:"red"}}>Already registered</b>  <Link to="/" style={{color:"black"}}>sign in?</Link>
        </p>      
    </div> 
    </form> 
    </div>      
    </div>
      );
}
 
export default Signup;