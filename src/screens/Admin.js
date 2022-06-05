import  {Button}  from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin = () => {
    return ( 

        <div>
        <Link to="/employees"><Button>Employee Details</Button></Link>
        <br />
        <Link to="/rewardamount"><Button>Reward Details</Button></Link>
        <br />
        <Link to="/opdamount"><Button>OPD Details</Button></Link>
        </div>
        

     );
}
 
export default Admin;