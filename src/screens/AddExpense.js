import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ExpenseForm from "../components/ExpenseForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddExpense = () => {
    return ( 

        <div>

        <Header />
       
        <ExpenseForm />
        
        <Button variant='danger' size="lg"><Link to="/expense">Cancel</Link></Button>
        <br />
        <br />
        <div className='footer-div'>
          <Footer />
        </div>

        </div>


     );
}
 
export default AddExpense;