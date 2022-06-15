import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import ExpensesService from "../services/ExpensesService"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {PostExpenseApiAction,UpdateExpenseApiAction} from '../redux/action/expenseAction'
import { useDispatch, useSelector } from "react-redux";
import { GetExpenseDetailsById } from "../services/ExpensesService";

import '../style/components/Form.css'

const ExpenseForm = () => {

   const[buOrDept,setbuOrDept] = useState("");
   const[project,setproject] = useState("");
   const[extensionNo,setextensionNo] = useState("");
   const[customer,setcustomer] = useState("");
   const[location,setlocation] = useState("");
   const[billability,setbillability] = useState("");
   const[sta_tus,setsta_tus] = useState("")

   const employeeId = localStorage.getItem("userId");
   const[employee,setemployee] = useState(employeeId)

   console.log(employeeId);
   console.log(employee);

   const navigate = useNavigate();
   const {id} = useParams();

   const dispatch = useDispatch();
    const isResponse = useSelector(state=>state.expenseReducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.expenseReducer.isUpdateResponse)

    
    const saveOrUpdateExpense = (e)=>{

    e.preventDefault();
    const expense = {buOrDept, project, extensionNo,customer,location,billability,sta_tus,employee}
    

    if(id){
        dispatch(UpdateExpenseApiAction(expense,id)); 

    }else{
        dispatch(PostExpenseApiAction(expense));
    }
    }

    if(isUpdateResponse){
        alert("Your data has been updated!"); 
        navigate('/expense')
        window.location.reload(false);
    }
    
    if(isResponse){
        alert("Your response has been submitted!");
        navigate('/expense')
        window.location.reload(false);
    }

    useEffect(() => {
       
        GetExpenseDetailsById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setbuOrDept(response.data.payload[0].buOrDept)
                    setproject(response.data.payload[0].project)
                    setextensionNo(response.data.payload[0].extensionNo)
                    setcustomer(response.data.payload[0].customer)
                    setlocation(response.data.payload[0].location)
                    setbillability(response.data.payload[0].billability)
                    setsta_tus(response.data.payload[0].sta_tus)
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
             return <h2 style={{textAlign:'center'}}>Update Expense</h2>
     }else{
            return <h2 style={{textAlign:'center'}}>Add Expense</h2>
     }
   }


    return ( 

         <div>
             
             {title()}
             <div className="signup_container">
          
          <div className="signup_form_container">  
         
          <div className="left">
                      <h1>Add your Expense details</h1>
                      
          </div>    
          <div className="right"> 

             <form className="container">

             {/* <div>
                                 <label > EMPLOYEE ID No:{employeeId}</label>
                                 
             </div>       */}

             <div>
                                 {/* <div><label > BuOrDept :</label></div> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter buOrDept"
                                     name = "buOrDept"
                                     className="input"
                                     value = {buOrDept}
                                     onChange = {(e) => setbuOrDept(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > Project :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter project"
                                     name = "project"
                                     className="input"
                                     value = {project}
                                     onChange = {(e) => setproject(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > ExtensionNo :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter extensionNo"
                                     name = "extensionNo"
                                     className="input"
                                     value = {extensionNo}
                                     onChange = {(e) => setextensionNo(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > Customer :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter customer"
                                     name = "customer"
                                     className="input"
                                     value = {customer}
                                     onChange = {(e) => setcustomer(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > Location :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter location"
                                     name = "location"
                                     className="input"
                                     value = {location}
                                     onChange = {(e) => setlocation(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > Billability :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter billability"
                                     name = "billability"
                                     className="input"
                                     value = {billability}
                                     onChange = {(e) => setbillability(e.target.value)}
                                 >
                                 </input>
             </div>

             <br / >
             <br / >

                  
            
        
             <div>
             <Button className="green_btn" onClick={(e)=>{saveOrUpdateExpense(e)}} variant='warning' size="lg">Submit</Button>
             <Button className="green_btn" variant='danger' size="lg"><Link to="/expense">Cancel</Link></Button>
             </div>
             <br />

             </form>
             </div>
             </div>
             </div>

         </div>


     );
}
 
export default ExpenseForm;