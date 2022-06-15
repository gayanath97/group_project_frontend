import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import OpdbillForm from '../components/OpdbillForm';
import { Button } from 'react-bootstrap';

const AddOpdbill = () => {
    return ( 

        <div>

        <Header />
        <OpdbillForm />
        
        {/* <div>
             <Button variant='danger' size="lg"><Link to="/opd"> Cancel </Link></Button>
        </div> */}
        
        <Footer />
        

        </div>


     );
}
 
export default AddOpdbill;