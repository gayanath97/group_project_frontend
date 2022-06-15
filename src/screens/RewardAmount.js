import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import RewardAmountDetails from "../components/RewardAmountDetails";

const RewardAmount = () => {
    return ( 
        <div>
            <AdminHeader />
        <Link to='/addreward'><Button className="green_btn" variant="warning">Add Reward Amount to an employee</Button></Link>
        <RewardAmountDetails />
        <AdminFooter />
        </div>
     );
}
 
export default RewardAmount;