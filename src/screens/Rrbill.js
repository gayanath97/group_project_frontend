import Footer from "../components/Footer";
import Header from "../components/Header";
import RrbillDetails from "../components/RrbillDetails";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/components/Form.css'
const Rrbill = () => {
    return ( 
        <div>
            <Header />
            <Button className="green_btn" variant="info"><Link to='/addrrbill'>Add a bill</Link></Button>
            <RrbillDetails />
            <Button className="green_btn" variant="danger"><Link to='/rr'>Go to RR Home Page</Link></Button>
            
            <br /><br /><br /><br /><br />
            
            <Footer />
            
        </div>
     );
}
 
export default Rrbill;