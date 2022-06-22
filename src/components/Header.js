// import {Navbar,Nav} from 'react-bootstrap';
// import { Container } from "react-bootstrap";
// import pl from "../img/persistent.jpeg"
// import Avatar from '@mui/material/Avatar';
// import { Dropdown } from 'react-bootstrap';


// const Header = () => {

//     return (

//         <div>
         

//     <Navbar bg="dark" variant="dark" >
//     <Container >
//     <Navbar.Brand href="https://www.persistent.com/">Persistent Systems Lanka (PVT) LTD</Navbar.Brand>
//     <Nav className="me-auto">
    
//       {/* <Nav.Link href="/">Home</Nav.Link> */}
//       <Nav.Link href="/expense">Expense</Nav.Link>
//       <Nav.Link href="/rr">RR</Nav.Link>
//       <Nav.Link href="/opd">OPD</Nav.Link>
//     </Nav>
//     </Container>

    
    
//     {/* <button><a style={{color:"red"}}>Persistent</a></button> */}
//     <div style={{color:"red"}}>
//     <Dropdown >
//   <Dropdown.Toggle variant="info" id="dropdown-basic" style={{color:"red"}}>
//   Profile
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="/" onClick={()=>{localStorage.removeItem("accessToken")}}>LOG OUT</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// </div> 
// &nbsp;
// &nbsp;
// &nbsp;
//    <div style={{marginRight:15}} >
//     <Avatar alt="prof" src={pl} />
//     </div>
    
    
//   </Navbar>
  
  

//         </div>

//       );
// }
 
// export default Header;


import logo from '../img/logo.jpg';
import profile from '../img/profile.jpg';
import React, {Component} from "react";
import { Navbar, Nav, Container, Dropdown, Image, Button } from "react-bootstrap";
import './../style/components/Header.css';

const Header = () => {
  return ( 

    <div>
      {/* bg="dark" */}
    <Navbar className='header' variant="dark">
        <Container>
            <Navbar.Brand className="logo">
                <img src={logo} height="50px"/>                   
            </Navbar.Brand>
            <Navbar.Brand>
                <b>Persisten Systems</b>
                <br/>
                <h6>Expense Claim Management System</h6>
            </Navbar.Brand>
            
            {/* className="me-auto" */}
            <Nav className="links" >
                <br/>
                <Nav.Link href="/expense">Expense</Nav.Link>
                <Nav.Link href="/rr">RR</Nav.Link>
                <Nav.Link href="/opd">OPD</Nav.Link>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <Image src={profile} height="50px" width="50px" roundedCircle />
                    </Dropdown.Toggle>

                       <Dropdown.Menu>
                               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                  <Dropdown.Item href="/" onClick={()=>{localStorage.removeItem("accessToken")}}>LOG OUT</Dropdown.Item>
   </Dropdown.Menu>
                </Dropdown>    
            </Nav>
        </Container>
    </Navbar>
</div>


   );
}
 
export default Header;