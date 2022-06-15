
import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {GetRewardamountDetailsById} from  "../services/RewardamountService"
import {PostRewardAmountApiAction,UpdateRewardAmountApiAction} from '../redux/action/rewardamountAction'

const RewardAmountForm = () => {

    
    const [expireDate,setexpireDate] = useState("")
    const [amount,setamount] = useState("")
    const [addedDate,setaddedDate] = useState("")
    const [employee,setemployee] = useState("")

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isResponse = useSelector(state=>state.RewardamountReducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.RewardamountReducer.isUpdateResponse)

    const saveOrUpdateAmount = (e)=>{
        e.preventDefault();
        const rewardAmount = {expireDate, amount, addedDate,employee}
        
        if(id){
           dispatch(UpdateRewardAmountApiAction(rewardAmount,id));  
    
        }else{
            dispatch(PostRewardAmountApiAction(rewardAmount));
        }
        }
        if(isUpdateResponse){
            alert("Your data has been updated!"); 
            navigate('/rewardamount')
            window.location.reload(false);
        }
        
        if(isResponse){
            alert("Your response has been submitted!");
            navigate('/rewardamount')
            window.location.reload(false);
        } 
        useEffect(() => {
       
            GetRewardamountDetailsById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setexpireDate(response.data.payload[0].expireDate)
                    setamount(response.data.payload[0].amount)
                    setaddedDate(response.data.payload[0].addedDate)
                    setemployee(response.data.payload[0].employee)
                }
            )
            .catch(
                (error)=>{
                     console.log(error)
                }
            )

           
        
    }, [])

    const title = ()=>{
        if(id){
                return <h2 style={{textAlign:"center"}}>Update Reward</h2>
        }else{
               return <h2 style={{textAlign:"center"}}>Add Reward</h2>
        }
    }

    return ( 
        <div>
             {title()}
             <div className="signup_container">
          
          <div className="signup_form_container">  
          <div className="left">
                      <h1>Add Reward</h1>
                      
          </div>    
          <div className="right"> 
             
                <form className="container">
    
                 <div>
                                     <label > ExpireDate :</label>
                                     <input
                                         type = "date"
                                         placeholder = "Enter ExpireDate"
                                         name = "expireDate"
                                         className="input"
                                         value = {expireDate}
                                         onChange = {(e) => setexpireDate(e.target.value)}
                                     >
                                     </input>
                 </div>
                 <div>
                                     <label > Amount :</label>
                                     <input
                                         type = "text"
                                         placeholder = "Enter amount"
                                         name = "amount"
                                         className="input"
                                         value = {amount}
                                         onChange = {(e) => setamount(e.target.value)}
                                     >
                                     </input>
                 </div>
                 <div>
                                     <label > AddedDate:</label>
                                     <input
                                         type = "date"
                                         placeholder = "Enter addedDate"
                                         name = "addedDate"
                                         className="input"
                                         value = {addedDate}
                                         onChange = {(e) => setaddedDate(e.target.value)}
                                     >
                                     </input>
                 </div>

                 <div>
                                     <label > EmployeeId: </label>
                                     <input
                                         type = "text"
                                         placeholder = "Enter EmployeeId"
                                         name = "employee"
                                         className="input"
                                         value = {employee}
                                         onChange = {(e) => setemployee(e.target.value)}
                                     >
                                     </input>
                 </div>
                 
                 
                 <br / >
                 <br / >
    
                      
                
            
                 <div>
                 <Button className="green_btn"  onClick={(e)=>{saveOrUpdateAmount(e)}} variant='warning' size="lg">Submit</Button>
                 <Button className="green_btn" variant="danger" size="lg"><Link  to="/rewardamount">Cansel</Link></Button>
                 </div>
                 <br />
                
                 
                     
                 </form>
                 </div>
        </div>
        </div>    
        </div>
     );
}
 
export default RewardAmountForm;