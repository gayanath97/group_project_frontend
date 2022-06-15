import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import OpdAmountDetails from "../components/OpdAmountDetails";

const OpdAmount = () => {
    return ( 
        <div>
            <AdminHeader />
            <Button className="green_btn" variant='warning'><Link to='/addopdamount'>Add Opd Amount to an employee</Link></Button>
            <OpdAmountDetails />
            <br /><br /><br />
            <AdminFooter />
        </div>
     );
}
 
export default OpdAmount;