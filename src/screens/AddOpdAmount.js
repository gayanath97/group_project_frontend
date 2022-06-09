import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OpdAmountForm from "../components/OpdAmountForm";

const AddOpdAmount = () => {
    return ( 
        <div>
            <OpdAmountForm />
            <Link to="/opdamount"><Button size="lg">Cansel</Button></Link>
        </div>
     );
}
 
export default AddOpdAmount;