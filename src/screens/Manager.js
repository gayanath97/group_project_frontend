
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const Manager = () => {
    return ( 

            <div>
                <Button variant="info" ><Link to="/employees">Employees Details</Link></Button>
                <br />
                <Button variant="info" ><Link to="/rrs">Employees RR Details</Link></Button>
                <br />
                <Button variant="info" ><Link to="/expenses">Employees Expense Details</Link></Button>
                <br />
                <Button variant="info" ><Link to="/opds">Employees OPD Details</Link></Button>
            </div>

     );
}
 
export default Manager;