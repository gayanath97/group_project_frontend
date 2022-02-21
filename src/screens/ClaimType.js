import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../components/Header"
import Footer from "../components/Footer"

const ClaimType = () => {
    return ( 
            
           <div>
               <Header />
                <br />
                <div style={{textAlign:"center"}}>
                    <h1 style={{fontWeight: 'bold'}}>Select claim type </h1>
                </div>
                <br />
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
                <Footer /> 
           </div>

     );
}
 
export default ClaimType;