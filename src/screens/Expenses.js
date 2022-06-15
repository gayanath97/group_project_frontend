import ExpensesDetails from "../components/ExpensesDetails";
import ManagerHeader from '../components/ManagerHeader';
import ManagerFooter from '../components/ManagerFooter';

const Expenses = () => {
    return ( 
        <div>
        <ManagerHeader />
        <ExpensesDetails />
        <ManagerFooter />
        </div>
     );
}
 
export default Expenses;