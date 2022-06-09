import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OpdAmountDetails from "../components/OpdAmountDetails";

const OpdAmount = () => {
    return ( 
        <div>
            <Link to='/addopdamount'><Button>Add Opd Amount to an employee</Button></Link>
            <OpdAmountDetails />
        </div>
     );
}
 
export default OpdAmount;