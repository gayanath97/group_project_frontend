import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExpensebillDetails  from "../components/ExpensebillDetails"

const Expensebill = () => {
    return ( 
        <div>
            <Header />

            <Button className="green_btn" variant="info"><Link to='/addexpensebill'>Add a bill</Link></Button>
            <ExpensebillDetails />
            <Button className="green_btn" variant="danger"><Link to='/expense'>Go to Expense Home Page</Link></Button>
            <br />
        <br /><br />
        <br /><br />
        <br />
            <Footer />
        </div>
     );
}
 
export default Expensebill;