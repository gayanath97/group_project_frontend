import { useState,useEffect } from "react";
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { GetRrbillApiAction,DeleteRrbillApiAction } from '../redux/action/rrbillAction';

const RrbillDetails = () => {

   
    const [search, setNewSearch] = useState("");

    const dispatch = useDispatch();
    const responseData = useSelector(state=>state.rrbillReducer.rrbillDetails);
    const responseData1 = useSelector(state=>state.expenseReducer.expenseDetails);
    
    const navigate = useNavigate();
  
   

    useEffect(() => {
        dispatch(GetRrbillApiAction());
        }, [dispatch])


    //  const handleSearchChange = (e)=>{
    //     setNewSearch(e.target.value);
    //    }

  
    //    const filtered = !search
    //   ? rrbills
    //   : rrbills.filter((e) =>
    //         e.extensionNo.toLowerCase().includes(search.toLowerCase())
    //     );

   
   const rrId= localStorage.getItem('rrId');
   const filtered = !search
    ? responseData.filter((e)=>{return e.rr==rrId })
    : null
    

     

    return ( 
        <div>
              {/* <br />
          Filter your RR bill by extensionNo:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br /> */}
              
              <div>
              <Table striped borderd hover variant="light" >
            <thead>

                <th>RR_ID</th>
                <th>RrBill Id</th>
                <th>Extension No</th>
                <th>Amount</th>
                <th>Particulars</th>
                <th>Date</th>
                
                

                <th>Actions</th>
            </thead>
            <tbody>
             {   
                   filtered?
                    filtered.map(

                        rrbill =>{
                        return(
                        <tr key={rrbill.id}>

                               <td>{rrbill.rr}</td>
                               <td>{rrbill.id}</td>
                               <td>{rrbill.extensionNo}</td>  
                               <td>{rrbill.amount}</td>
                               <td>{rrbill.particulars}</td>
                               <td>{rrbill.date}</td>
                               <td>
                              <Button variant="warning"> <Link to={`/edit-rrbill/${rrbill.id}`} >Update</Link></Button>
                               <Button  onClick = {() => {
                               dispatch(DeleteRrbillApiAction(rrbill.id))
                               alert("Your data has been deleted!")
                               window.location.reload(false)
                            }}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                               <br />
                               </td>
                               
                        </tr>
                        )
                         } ):null
             }    
            </tbody>
            
            </Table>
              </div>
             
              </div> 


    );
}
 
export default RrbillDetails;