import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RewardAmountDetails from "../components/RewardAmountDetails";

const RewardAmount = () => {
    return ( 
        <div>
        <Link to='/addreward'><Button>Add Reward Amount to an employee</Button></Link>
        <RewardAmountDetails />
        </div>
     );
}
 
export default RewardAmount;