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
       <h1 style={{textAlign:'center'}}>Expenses</h1>
       <br />
       <Button  className="green_btn" variant="info" ><Link to="/addexpense">Add a claim</Link></Button>
       <ExpenseDetails />
       <br />
       
       <br />
       <br />
       <Footer />

       </div>


     );
}
 
export default Expense;