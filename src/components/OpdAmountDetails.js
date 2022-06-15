import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { GetOpdAmountApiAction,DeleteOpdAmountApiAction } from '../redux/action/opdamountAction';
import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'

const OpdAmountDetails = () => {


const dispatch = useDispatch();
const responseData = useSelector(state=>state.OpdamountReducer.opdamountDetails)
const isDeleteResponse = useSelector(state=>state.OpdamountReducer.isDeleteResponse)
   
   useEffect(() => {
    dispatch(GetOpdAmountApiAction());
    console.log(responseData);
    }, [dispatch])

    return ( 
        <div>
            
            <Table striped borderd hover variant="light">
            <thead>
                <th>Employee</th>
                <th>RewardId</th>
                <th>ExpireDate</th>
                <th>Amount</th>
                {/* <th>AddedDate</th> */}
                <th>Actions</th>
            </thead>
            <tbody>
             { 
             responseData?  
             responseData.map(

                        opd=>{
                            
                        return(
                        <tr key={opd.id}>
                               <td>{opd.employee}</td> 
                               <td>{opd.id}</td>
                               <td>{opd.expireDate}</td>
                               <td>{opd.amount}</td>
                               {/* <td>{opd.addedDate}</td> */}
                               <td>
                               <Button className="green_btn" variant="warning"> <Link to={`/edit-opdamount/${opd.id}`} >Update</Link></Button>
                               <Button className="green_btn" onClick = {() => {
                                   dispatch(DeleteOpdAmountApiAction(opd.id))
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
 
export default OpdAmountDetails;