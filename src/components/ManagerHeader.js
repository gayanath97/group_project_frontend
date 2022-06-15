import {Navbar,Nav} from 'react-bootstrap';
import { Container } from "react-bootstrap";
import pl from "../img/persistent.jpeg"
import Avatar from '@mui/material/Avatar';
import { Dropdown } from 'react-bootstrap';


const Header = () => {

    return (

        <div>
         

    <Navbar bg="dark" variant="dark" >
    <Container >
    <Navbar.Brand href="https://www.persistent.com/">Persistent Systems Lanka (PVT) LTD</Navbar.Brand>
    <Nav className="me-auto">
    
      {/* <Nav.Link href="/">Home</Nav.Link> */}
      <Nav.Link href="/manageremployees">Employees</Nav.Link>
      <Nav.Link href="/expenses">Expenses</Nav.Link>
      <Nav.Link href="/rrs">RRs</Nav.Link>
      <Nav.Link href="/opds">OPDs</Nav.Link>
    </Nav>
    </Container>

    
    
    {/* <button><a style={{color:"red"}}>Persistent</a></button> */}
    <div style={{color:"red"}}>
    <Dropdown >
  <Dropdown.Toggle variant="info" id="dropdown-basic" style={{color:"red"}}>
  Profile
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="/" onClick={()=>{localStorage.removeItem("accessToken")}}>LOG OUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div> 
&nbsp;
&nbsp;
&nbsp;
   <div style={{marginRight:15}} >
    <Avatar alt="prof" src={pl} />
    </div>
    
    
  </Navbar>
  
  

        </div>

      );
}
 
export default Header;