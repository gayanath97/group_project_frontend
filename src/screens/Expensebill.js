import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExpensebillDetails  from "../components/ExpensebillDetails"

const Expensebill = () => {
    return ( 
        <div>
            <Header />

            <Button variant="info"><Link to='/addexpensebill'>Add a bill</Link></Button>
            <ExpensebillDetails />
            <Button variant="danger"><Link to='/expense'>Go to Expense Home Page</Link></Button>

            <div className='footer-div'>
          <Footer />
        </div>
        </div>
     );
}
 
export default Expensebill;