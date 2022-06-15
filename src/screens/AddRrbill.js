import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import RrbillForm from '../components/RrbillForm';
import { Button } from 'react-bootstrap';

const AddRrbill = () => {
    return ( 

        <div>

        <Header />
        <RrbillForm />
        
        {/* <div>
             <Button variant='danger' size="lg"><Link to="/rr"> Cancel </Link></Button>
        </div> */}
        
        <Footer />

        </div>


     );
}
 
export default AddRrbill;