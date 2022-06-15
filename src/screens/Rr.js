import Header from "../components/Header";
import Footer from "../components/Footer";
import RrDetails from "../components/RrDetails";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import '../style/components/Form.css'

const Rr = () => {
    return ( 

    <div >
       <Header />
      
       <br />
       <h1 style={{textAlign:'center'}}>Reward & Recognitions</h1>
       <br />
       <Button className="green_btn" variant="info" ><Link to="/addrr">Add a claim</Link></Button>
       <RrDetails />
       <br />
       
       <br />
       <br />
       <Footer />

       </div>

     );
}
 
export default Rr;