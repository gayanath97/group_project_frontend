import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { GetRewardAmountApiAction,DeleteRewardAmountApiAction } from '../redux/action/rewardamountAction';
import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'

const RewardAmountDetails = () => {


const dispatch = useDispatch();
const responseData = useSelector(state=>state.RewardamountReducer.rewardamountDetails)
const isDeleteResponse = useSelector(state=>state.RewardamountReducer.isDeleteResponse)
   
   useEffect(() => {
    dispatch(GetRewardAmountApiAction());
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
                <th>AddedDate</th>
                <th>Actions</th>
            </thead>
            <tbody>
             { 
             responseData?  
             responseData.map(

                        reward =>{
                            
                        return(
                        <tr key={reward.rewardId}>
                               <td>{reward.employee}</td> 
                               <td>{reward.rewardId}</td>
                               <td>{reward.expireDate}</td>
                               <td>{reward.amount}</td>
                               <td>{reward.addedDate}</td>
                               <td>
                               <Button className="green_btn" variant="warning"> <Link to={`/edit-reward/${reward.rewardId}`} >Update</Link></Button>
                               <Button className="green_btn"  onClick = {() => {
                                   dispatch(DeleteRewardAmountApiAction(reward.rewardId))
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
 
export default RewardAmountDetails;