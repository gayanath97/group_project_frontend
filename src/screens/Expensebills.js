import ExpensebillsDetails from "../components/ExpensebillsDetails";
import ManagerHeader from '../components/ManagerHeader';
import ManagerFooter from '../components/ManagerFooter';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Expensebills = () => {
    return ( 
        <div>
        <ManagerHeader />
        <br />
        <ExpensebillsDetails />
        <Button className="green_btn" variant="warning"><Link to='/expenses'>Go to Expenses list</Link></Button>
        <br /><br /><br /><br /><br />
        <ManagerFooter />
        
        </div>
     );
}
 
export default Expensebills;