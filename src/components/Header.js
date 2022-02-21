import {Navbar,Nav} from 'react-bootstrap';
import { Container } from "react-bootstrap";


const Header = () => {
    return (

        <div>
         

   <Navbar bg="dark" variant="dark" >
    <Container >
    <Navbar.Brand href="https://www.persistent.com/">Persistent Systems Lanka (PVT) LTD</Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/expense">Expense</Nav.Link>
      <Nav.Link href="/rr">RR</Nav.Link>
      <Nav.Link href="/opd">OPD</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  

        </div>

      );
}
 
export default Header;