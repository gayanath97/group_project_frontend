 
// import '../style/LoginStyles.css';
import '../style/screens/Login.css';
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import pk from "../img/pk.jpg"
import { Button } from 'react-bootstrap';
import {useState} from "react";
import SignInUserService from '../services/SignInUserService';

const Login = () => {

  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")

  const navigate = useNavigate();

  const signInUsers = (e)=>{
    e.preventDefault();
    const signin = {username,password}

    SignInUserService.signUser(signin)
        .then(
            (response) => {
            let accessToken = response.data.accessToken;
            let a = "Bearer "
            localStorage.setItem("accessToken",a+accessToken);
            let firstName =response.data.firstName;
            localStorage.setItem("firstName",firstName);
            let lastName =response.data.lastName;
            localStorage.setItem("lastName",lastName);
            let userId =response.data.id;
            localStorage.setItem("userId",userId);
            let roles =response.data.roles[0];
            localStorage.setItem("roles",roles);
            console.log(response.data) 
            
            if(localStorage.getItem("roles")=="ROLE_USER"){
              navigate('/claimtype')
            }
            if(localStorage.getItem("roles")=="ROLE_ADMIN"){
              navigate('/admin')
            }
            if(localStorage.getItem("roles")=="ROLE_MANAGER"){
              navigate('/manager')
            }

           
        }
        )
        .catch(
            error => {
            console.log(error)
            window.alert("wrong username/password.Try again");
            window.location.reload()
        }
        )

  }

  
  
  //       useEffect(() => {
       
  //         SignInService.getsigneduser(id)
  //         .then(
  //             (response)=>{
  //                 console.log(response.data.payload[0]);
                  
  //                 setusername(response.data.payload[0].username)
  //                 setpassword(response.data.payload[0].password)
                  
  //             }
  //         )
  //         .catch(
  //             (error)=>{
  //                  console.log(error)
  //             }
  //         )

         
      
  // }, [])

    return (  
      <div >
      
        <div className="main" style={{height:"450px"}}>
       
        
        <p className="sign" align="center">Sign in</p>
        <form className="form1">
        
        <input class="un " type="text" align="center" placeholder="Username" value = {username}
            onChange = {(e) => setusername(e.target.value)}/>
      <input class="pass" type="password" align="center" placeholder="Password"  value = {password}
            onChange = {(e) => setpassword(e.target.value)} /> 

       
        
        <Button onClick={(e)=>{signInUsers(e)}} type="submit" className="un" size="lg" >Sign In</Button>
        <p className="un">
           <b style={{color:"red"}}>Not registered</b>  <Link to="/signup" style={{color:"black"}}>sign Up?</Link>
        </p>
        
        {/* <p className="un">
           <b style={{color:"red"}}>Forgotten Password</b>  <Link to="/forgottenpassword" style={{color:"black"}}>verify?</Link>
        </p> */}
    </form> 

    </div>
    </div>
      );
}
 
export default Login;