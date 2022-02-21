import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
import ExpenseDetails from "../components/ExpenseDetails";
import ExpensebillDetails from "../components/ExpensebillDetails";


const Expense = () => {
    return ( 

        <div >
       <Header />
      
       <br />
       <h1>Expenses</h1>
       <br />
       <Button variant="info" ><Link to="/addexpense">Add a claim</Link></Button>
       <ExpenseDetails />
       <br />
       <Button variant="info"><Link to='/addexpensebill'>Add a bill</Link></Button>
       
       <ExpensebillDetails />
       
       <br />
       <Footer />

       </div>


     );
}
 
export default Expense;