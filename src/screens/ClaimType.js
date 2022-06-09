import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../components/Header"
import Footer from "../components/Footer"
import pl from "../img/pl.jpg"

const ClaimType = () => {

    
    return ( 
            
    <div>
        <Header />

        {/* <div style={{backgroundImage:`url(${pl})`, */}
        <div style={{
                         width: '100%',
                         height: '100%',
                         backgroundSize: 'cover'
                         }}>
                <br />
                <div style={{textAlign:"center"}}>
                <h1>{"Welcome "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}</h1>
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
                <Button variant="warning" size="lg"><Link to="/expense">Expense Claim</Link></Button>      
                </div>
                <br />
                <div>
                <Button variant="warning" size="lg"><Link to="/opd">Opd Claim</Link></Button>
                </div>
                <br />
                <div>
                <Button variant="warning" size="lg"><Link to="/rr">Rr Claim</Link></Button>
                </div>
            </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
        </div>
        <div className='footer-div'>
          <Footer />
        </div>
                
     </div>

     );
}
 
export default ClaimType;