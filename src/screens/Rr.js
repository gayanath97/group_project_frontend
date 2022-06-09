import Header from "../components/Header";
import Footer from "../components/Footer";
import RrDetails from "../components/RrDetails";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Rr = () => {
    return ( 

    <div >
       <Header />
      
       <br />
       <h1>Reward & Recognitions</h1>
       <br />
       <Button variant="info" ><Link to="/addrr">Add a claim</Link></Button>
       <RrDetails />
       <br />
       
       <br />
       <div className='footer-div'>
          <Footer />
        </div>

       </div>

     );
}
 
export default Rr;