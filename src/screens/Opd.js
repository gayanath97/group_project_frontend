import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import OpdDetails from "../components/OpdDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Opd = () => {

    return ( 
        <div>
        <Header />
      
        <br />
        <h1>Opd Medical Expenses</h1>
        <br />
        <Button variant="info" ><Link to="/addopd">Add a claim</Link></Button>
        <OpdDetails />
        
        <br />
        <Footer />

        </div>

     );
}
 
export default Opd;