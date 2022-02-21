import Header from "../components/Header";
import Footer from "../components/Footer";
import RrDetails from "../components/RrDetails";
import RrbillDetails from "../components/RrbillDetails";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Rr = () => {
    return ( 

    <div >
       <Header />
       {/* <div style={{overflowY:"scroll"}}> */}
       <br />
       <h1>Reward & Recognitions</h1>
       <br />
       <Button variant="info" ><Link to="/addrr">Add a claim</Link></Button>
       <RrDetails />
       <br />
       <Button variant="info"><Link to='/addrrbill'>Add a bill</Link></Button>
       
       <RrbillDetails />
       {/* </div> */}
       <br />
       <Footer />

       </div>

     );
}
 
export default Rr;