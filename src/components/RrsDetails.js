import { Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { GetRrApiAction,DeleteRrApiAction } from '../redux/action/rrAction';
import { PostManagerRrApiDetails } from "../services/ManagerRrService";


const RrsDetails = () => {

    const [search, setNewSearch] = useState("");
    const navigate = useNavigate();

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

//const employeeId= localStorage.getItem('userId');
   const filtered = !search
    ? responseData
    : responseData.filter((e)=>{
        // e.extensionNo.toLowerCase().includes(search.toLowerCase()) 
        return e.sta_tus == search.toLowerCase()
    })

      const handleSearchChange = (e)=>{
        setNewSearch(e.target.value);
       }

    return ( 

       <div>
       
        <br />
        Filter Rrs by status(pending/accepted/rejected):{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br />
        <Table striped borderd hover variant="light">
            <thead>
                <th>Employee Id Id</th>
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
                               <Button onClick={()=>{
                                   localStorage.setItem('extNo', rr.extensionNo);
                                   localStorage.setItem('rrId',rr.id);
                                   console.log(localStorage.getItem('rrId'))
                                   }} variant="warning"> <Link to={`/rrbills/`} >View</Link></Button>
                               </td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}

                               {/* <Button variant="warning"> <Link to={`/edit-rr/${rr.id}`} >Update</Link></Button> */}

                               <Button  
                               onClick={()=>{
                                localStorage.setItem('rrId',rr.id);
                                console.log(localStorage.getItem('rrId'));
                                PostManagerRrApiDetails({
                                    "rrId":localStorage.getItem('rrId') ,
                                    "sta_tus": "accepted"
                                  })
                                .then((res)=>{
                                  //  console.log('Response Data is _____',res);
                                    navigate('/rrs')
                                    window.location.reload(false);
                                })
                               }}
                               variant="warning"> Accept</Button>
                               <Button
                               onClick={()=>{
                                localStorage.setItem('rrId',rr.id);
                                console.log(localStorage.getItem('rrId'));
                                PostManagerRrApiDetails({
                                    "rrId":localStorage.getItem('rrId') ,
                                    "sta_tus": "rejected"
                                  })
                                .then((res)=>{
                                  //  console.log('Response Data is _____',res);
                                    navigate('/rrs')
                                    window.location.reload(false);
                                })
                               }}
                               variant="danger"> Reject</Button>

                               {/* <Button  onClick = {() => {
                                   dispatch(DeleteRrApiAction(rr.id))
                                   alert("Your data has been deleted!")
                                   window.location.reload(false)
                                }}
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
 
export default RrsDetails;