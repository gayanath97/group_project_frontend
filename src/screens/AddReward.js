import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RewardAmountForm from "../components/RewardAmountForm";

const AddReward = () => {
    return ( 
        <div>
            
            <RewardAmountForm />
            <Link to="/rewardamount"><Button size="lg">Cansel</Button></Link>
        </div>
     );
}
 
export default AddReward;