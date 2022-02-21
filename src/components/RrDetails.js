import { Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import RrsService from '../services/RrsService';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const RrDetails = () => {

 const [rrs, setrrs] = useState([])

 useEffect(() => {

    getAllRrs();

    }, [])
     
       const getAllRrs = () =>
       {
        RrsService.getAllRrs()
         .then(
             (response)=>{
                 setrrs(response.data.payload[0]);
                 console.log(response.data)
             }
         )
         .catch(
             error=>{
                 console.log(error);
             }
         )
 }

 const deleteRr = (id) => {
    RrsService.deleteRr(id)
    .then(
        (response) =>{
     getAllRrs();

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
                <th>Rr Id</th>
                <th>Rr ExtensionNo</th>
                <th>Rr Customer</th>
                <th>Rr Location</th>
                <th>Rr Sta_tus</th>
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    rrs.map(

                        rr =>
                        
                        <tr key={rr.id}>
                               <td>{rr.id}</td>
                               <td>{rr.extensionNo}</td>
                               <td>{rr.customer}</td>
                               <td>{rr.location}</td>
                               <td>{rr.sta_tus}</td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}
                               <Button variant="warning"> <Link to={`/edit-rr/${rr.id}`} >Update</Link></Button>
                               <Button  onClick = {() => deleteRr(rr.id)}
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
 
export default RrDetails;