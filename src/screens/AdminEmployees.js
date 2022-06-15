import EmployeeDetails from "../components/EmployeeDetails";
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';

const AdminEmployees = () => {
    return ( 
        <div>
            <AdminHeader />
            <EmployeeDetails />
            <AdminFooter />
        </div>
     );
}
 
export default AdminEmployees;