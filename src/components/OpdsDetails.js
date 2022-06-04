import { useState,useEffect } from "react";
import OpdBillService from "../services/OpdBillService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { GetOpdbillApiAction,DeleteOpdbillApiAction } from '../redux/action/opdAction';



const OpdsDetails = () => {

    const[opds,setopds] = useState([]);

const dispatch = useDispatch();
const responseData = useSelector(state=>state.opdReducer.opdbillDetails)
const isDeleteResponse = useSelector(state=>state.opdReducer.isDeleteResponse)


    const [search, setNewSearch] = useState("");
   
    useEffect(() => {
      dispatch(GetOpdbillApiAction());
      }, [dispatch])

//       if(isDeleteResponse){
//         alert("Your data has been deleted!")
//         window.location.reload(false)
// }
 

     const handleSearchChange = (e)=>{
      setNewSearch(e.target.value);
     }

    // const employeeId= localStorage.getItem('userId');
     const filtered = !search
      ? responseData
      : responseData.filter((e)=>{
          return e.employee== search.toLowerCase()
         })

    return ( 

        <div>
          <br />
          Filter opd by employee Id:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br />
<Table striped borderd hover variant="light">
            <thead>
            <th>Employee Id Id</th>
                <th>Opd Id</th>
                <th>Amount</th>
                <th>Particulars</th>
                <th>Date</th>
                <th>Status</th>
                
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    filtered?
                   filtered.map(

                        opd =>{
                       return( 
                        <tr key={opd.id}>
                            <td>{opd.employee}</td>
                               <td>{opd.id}</td>
                               <td>{opd.amount}</td>
                               <td>{opd.particulars}</td>
                               <td>{opd.date}</td>
                               <td>{opd.sta_tus}</td>
                               <td>
                               
                               <Button variant="warning"> <Link to={`/edit-opdbill/${opd.id}`} >Update</Link></Button>
                               {/* <Button  onClick = {() => {
                               dispatch(DeleteOpdbillApiAction(opd.id))
                               alert("Your data has been deleted!")
                             window.location.reload(false)
                               }
                              }
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button> */}
                               </td>
                        </tr>

                    )
                       }):null
             }       
            </tbody>
        </Table>



      </div>


     );
}
 
export default OpdsDetails;