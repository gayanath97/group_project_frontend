
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'
import ManagerHeader from '../components/ManagerHeader';
import ManagerFooter from '../components/ManagerFooter';

const Manager = () => {
    return ( 

            <div>
                <ManagerHeader />
                <div style={{
                         width: '100%',
                         height: '100%',
                         backgroundSize: 'cover'
                         }}>
                <br />
                <div style={{textAlign:"center"}}>
                <h1>{"Welcome Manager "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}</h1>
                </div>
               
                <div style={{textAlign:"center"}}>
                    <h1 style={{fontWeight: 'bold',
                                  color:"red"
                          }}>Please check and give your decision</h1>
                </div>
                
                <br />
                <br />
            <div style={{textAlign:"center"}}>
            <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/manageremployees">Employees Details</Link></Button>
                </div>
                <br />
                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/expenses">Employees Expense Details</Link></Button>      
                </div>
                <br />
                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/opds">Employees OPD Details</Link></Button>
                </div>
                <br />
                <div>
                <Button className="green_btn" variant="warning" size="lg"><Link to="/rrs">Employees RR Details</Link></Button>
                </div>
                
                
            </div>
        </div>
                {/* <br /><br /><br /><br /><br /><br /> */}
                <ManagerFooter />

            </div>

     );
}
 
export default Manager;