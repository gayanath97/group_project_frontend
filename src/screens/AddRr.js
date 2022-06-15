import RrBillDetails from '../components/RrbillDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import RrForm from '../components/RrForm';
import { Button } from 'react-bootstrap';

const AddRr = () => {
    return ( 

        <div>

        <Header />
       
        <RrForm />
        
        {/* <Button variant='danger' size="lg"><Link to="/rr">Cancel</Link></Button> */}
        <br />
        <br />
        <Footer />

        </div>
     );
}
 
export default AddRr;