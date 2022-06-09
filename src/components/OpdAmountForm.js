
import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {GetOpdamountDetailsById} from  "../services/OpdamountService"
import {PostOpdAmountApiAction,UpdateOpdAmountApiAction} from '../redux/action/opdamountAction'

const OpdAmountForm = () => {

    
    const [expireDate,setexpireDate] = useState("")
    const [amount,setamount] = useState("")
    const [employee,setemployee] = useState("")

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isResponse = useSelector(state=>state.OpdamountReducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.OpdamountReducer.isUpdateResponse)

    const saveOrUpdateAmount = (e)=>{
        e.preventDefault();
        const opdAmount = {amount,expireDate,employee}
        
        if(id){
           dispatch(UpdateOpdAmountApiAction(opdAmount,id));  
    
        }else{
            dispatch(PostOpdAmountApiAction(opdAmount));
        }
        }
        if(isUpdateResponse){
            alert("Your data has been updated!"); 
            navigate('/opdamount')
            window.location.reload(false);
        }
        
        if(isResponse){
            alert("Your response has been submitted!");
            navigate('/opdamount')
            window.location.reload(false);
        } 
        useEffect(() => {
       
            GetOpdamountDetailsById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setexpireDate(response.data.payload[0].expireDate)
                    setamount(response.data.payload[0].amount)
                 //   setaddedDate(response.data.payload[0].addedDate)
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
                return <h2 >Update Opd Amount</h2>
        }else{
               return <h2>Add Opd Amount</h2>
        }
    }

    return ( 
        <div>
             {title()}
                
             
                <form >
    
                 <div>
                                     <label > ExpireDate :</label>
                                     <input
                                         type = "date"
                                         placeholder = "Enter ExpireDate"
                                         name = "expireDate"
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
                                         value = {amount}
                                         onChange = {(e) => setamount(e.target.value)}
                                     >
                                     </input>
                 </div>
                 {/* <div>
                                     <label > AddedDate:</label>
                                     <input
                                         type = "date"
                                         placeholder = "Enter addedDate"
                                         name = "addedDate"
                                         value = {addedDate}
                                         onChange = {(e) => setaddedDate(e.target.value)}
                                     >
                                     </input>
                 </div> */}

                 <div>
                                     <label > EmployeeId:</label>
                                     <input
                                         type = "text"
                                         placeholder = "Enter EmployeeId"
                                         name = "employee"
                                         value = {employee}
                                         onChange = {(e) => setemployee(e.target.value)}
                                     >
                                     </input>
                 </div>
                 
                 
                 <br / >
                 <br / >
    
                      
                
            
                 <div>
                 <Button onClick={(e)=>{saveOrUpdateAmount(e)}} variant='warning' size="lg">Submit</Button>
                 </div>
                 <br />
                
                 
                     
                 </form>
        </div>
     );
}
 
export default OpdAmountForm;