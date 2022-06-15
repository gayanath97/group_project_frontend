import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import OpdAmountForm from "../components/OpdAmountForm";

const AddOpdAmount = () => {
    return ( 
        <div>
            <AdminHeader />
            <OpdAmountForm />
            {/* <Button className="green_btn" variant='danger' size="lg"><Link to="/opdamount">Cansel</Link></Button> */}
            <AdminFooter />
        </div>
     );
}
 
export default AddOpdAmount;