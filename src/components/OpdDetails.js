import { useState,useEffect } from "react";
import OpdBillService from "../services/OpdBillService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OpdDetails = () => {

    const[opds,setopds] = useState([]);
   
    useEffect(() => {
 
     getAllOpds();
 
     }, [])
 
     const getAllOpds = () =>
     {
       OpdBillService.getAllOpdBills()
       .then(
         (response)=>{
               
           setopds(response.data.payload[0]);
           console.log(response.data);
 
         }
         
       )
       .catch(
         error=>{
           console.log(error);
         }
       )
     }
 
     const deleteOpd = (id) => {
 
       OpdBillService.deleteOpdBill(id)
       .then(
           (response) =>{
        getAllOpds();
   
       }
       )
       .catch(
           error =>{
           console.log(error);
       }
       )
 
     }

    return ( 

        <div>

<Table striped borderd hover variant="light">
            <thead>
                <th>Opd Id</th>
                <th>Amount</th>
                <th>Particulars</th>
                <th>Date</th>
                <th>Status</th>
                
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    opds.map(

                        opd =>
                        
                        <tr key={opd.id}>
                               <td>{opd.id}</td>
                               <td>{opd.amount}</td>
                               <td>{opd.particulars}</td>
                               <td>{opd.date}</td>
                               <td>{opd.sta_tus}</td>
                               <td>
                               
                               <Button variant="warning"> <Link to={`/edit-opdbill/${opd.id}`} >Update</Link></Button>
                               <Button  onClick = {() => deleteOpd(opd.id)}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                               </td>
                        </tr>

                    )
             }       
            </tbody>
        </Table>



      </div>


     );
}
 
export default OpdDetails;