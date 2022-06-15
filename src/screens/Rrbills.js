import RrbillsDetails from "../components/RrbillsDetails";
import ManagerHeader from '../components/ManagerHeader';
import ManagerFooter from '../components/ManagerFooter';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rrbills = () => {
    return ( 
        <div>
        <ManagerHeader />
        <br />
         <RrbillsDetails />
         
         <Button className="green_btn" variant="warning"><Link to='/rrs'>Go to RRs list</Link></Button>
         <br /><br /><br /><br />
         <ManagerFooter />
        </div>
     );
}
 
export default Rrbills;

         
