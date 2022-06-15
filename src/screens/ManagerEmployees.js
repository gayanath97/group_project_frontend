import EmployeeDetails from "../components/EmployeeDetails";
import ManagerHeader from '../components/ManagerHeader';
import ManagerFooter from '../components/ManagerFooter';

const ManagerEmployees = () => {
    return ( 
        <div>
            <ManagerHeader />
            <EmployeeDetails />
            <ManagerFooter />
        </div>
     );
}
 
export default ManagerEmployees;