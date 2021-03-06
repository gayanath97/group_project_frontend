import { Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import { useDispatch, useSelector } from 'react-redux'
import { GetRrApiAction,DeleteRrApiAction } from '../redux/action/rrAction';

import '../style/components/Form.css'


const RrDetails = () => {

const [search, setNewSearch] = useState("");

const dispatch = useDispatch();
const responseData = useSelector(state=>state.rrReducer.rrDetails)
const isDeleteResponse = useSelector(state=>state.rrReducer.isDeleteResponse)

useEffect(() => {
    dispatch(GetRrApiAction());
    }, [dispatch])

// if(isDeleteResponse){
        // alert("Your data has been deleted!")
        // window.location.reload(false)
// }

const employeeId= localStorage.getItem('userId');
   const filtered = !search
    ? responseData.filter((e)=>{return e.employee==employeeId })
    : null

    return ( 

       <div>
       
   {/* {employeeId} */}
        <Table striped borderd hover variant="light">
            <thead>
                <th>Employee Id</th>
                <th>Rr Id</th>
                <th>Rr ExtensionNo</th>
                <th>Rr Customer</th>
                <th>Rr Location</th>
                <th>Rr Sta_tus</th>
                <th>Bills</th>
                <th>Actions</th>
                
            </thead>
            <tbody>
             { 
             filtered?  
             filtered.map(

                        rr =>{
                        return(
                        <tr key={rr.id}>
                               <td>{rr.employee}</td>
                               <td>{rr.id}</td>
                               <td>{rr.extensionNo}</td>
                               <td>{rr.customer}</td>
                               <td>{rr.location}</td>
                               <td>{rr.sta_tus}</td>
                               <td>
                                {/* Rrbill */}
                               <Button className="green_btn" onClick={()=>{
                                   localStorage.setItem('extNo', rr.extensionNo);
                                   localStorage.setItem('rrId',rr.id);
                                   console.log(localStorage.getItem('rrId'))
                                   }} variant="warning"> <Link to={`/rrbilldetails/`} >View</Link></Button>
                               </td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}
                               <Button className="green_btn" variant="warning"> <Link to={`/edit-rr/${rr.id}`} >Update</Link></Button>
                               <Button  className="green_btn" onClick = {() => {
                                   dispatch(DeleteRrApiAction(rr.id))
                                   alert("Your data has been deleted!")
                                   window.location.reload(false)
                                }}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
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
 
export default RrDetails;