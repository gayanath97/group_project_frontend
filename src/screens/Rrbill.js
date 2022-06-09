import Footer from "../components/Footer";
import Header from "../components/Header";
import RrbillDetails from "../components/RrbillDetails";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Rrbill = () => {
    return ( 
        <div>
            <Header />
            <Button variant="info"><Link to='/addrrbill'>Add a bill</Link></Button>
            <RrbillDetails />
            <Button variant="danger"><Link to='/rr'>Go to RR Home Page</Link></Button>
            <div className='footer-div'>
            <div className='footer-div'>
          <Footer />
        </div>
        </div>
            
        </div>
     );
}
 
export default Rrbill;