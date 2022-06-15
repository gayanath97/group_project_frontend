import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpensebillForm from "../components/ExpensebillForm";


const AddExpensebill = () => {
    return ( 

        <div>

        <Header />
        <ExpensebillForm />
        
        {/* <div>
             <Button variant='danger' size="lg"><Link to="/expense"> Cancel </Link></Button>
        </div> */}
        
        <Footer />

        </div>

     );
}
 
export default AddExpensebill;