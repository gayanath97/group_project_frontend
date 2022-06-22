import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import pl from "../img/pl.jpg"
import '../style/components/Form.css'
import { Image, Card, Button, Row, Col } from "react-bootstrap";
import OPD from '../img/7.jpeg';
import EXPENSE from '../img/5.jpeg';
import RR from '../img/6.jpeg';

const ClaimType = () => {

    
    return ( 
            
    <div>
        <Header />

        <div style={{
                         width: '100%',
                         height: '100%',
                         backgroundSize: 'cover'
                         }}>
                <br />
                <div style={{textAlign:"center"}}>
                <h1>{"Welcome User "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}</h1>
                </div>
               
                <div style={{textAlign:"center"}}>
                    <h1 style={{fontWeight: 'bold',
                                  color:"red"
                          }}>Select claim type </h1>
                </div>
                
                <br />
                <br />
            <div style={{textAlign:"center"}}>

             
            




                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/expense">Expense Claim</Link></Button>      
                </div>
                <br />
                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/opd">Opd Claim</Link></Button>
                </div>
                <br />
                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/rr">Rr Claim</Link></Button>
                </div>
            </div>
        </div>
                <Footer /> 
                
     </div>

     );
}
 
export default ClaimType;