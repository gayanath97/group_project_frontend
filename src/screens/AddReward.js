import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import RewardAmountForm from "../components/RewardAmountForm";

const AddReward = () => {
    return ( 
        <div>
            <AdminHeader />
            <RewardAmountForm />
            {/* <Button className="green_btn" variant="warning" size="lg"><Link  to="/rewardamount">Cansel</Link></Button> */}
            <AdminFooter />
        </div>
     );
}
 
export default AddReward;