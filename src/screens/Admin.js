import  {Button}  from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';

const Admin = () => {
    return ( 

        <div>
        <AdminHeader />
        <div style={{
                 width: '100%',
                 height: '100%',
                 backgroundSize: 'cover'
                 }}>
        <br />
        <div style={{textAlign:"center"}}>
        <h1>{"Welcome Admin "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}</h1>
        </div>
       
        <div style={{textAlign:"center"}}>
            <h1 style={{fontWeight: 'bold',
                          color:"red"
                  }}>Please add reward and opd amount to employees</h1>
        </div>
        
        <br />
        <br />
    <div style={{textAlign:"center"}}>
    <div>
        <Button className="green_btn" variant="warning" size="lg"><Link to="/adminemployees">Employees Details</Link></Button>
        </div>
        <br />
        <div>
        <Button className="green_btn" variant="warning" size="lg"><Link to="/rewardamount">Add Reward Amount</Link></Button>      
        </div>
        <br />
        <div>
        <Button className="green_btn" variant="warning" size="lg"><Link to="/opdamount">Add OPD Amount</Link></Button>
        </div>
        <br />
        
        
        
    </div>
</div>
        {/* <br /><br /><br /><br /><br /><br /> */}
        <AdminFooter />

    </div> 
        

     );
}
 
export default Admin;