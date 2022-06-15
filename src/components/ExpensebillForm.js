import { Button } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom"

import {PostExpensebillApiAction,UpdateExpensebillApiAction} from '../redux/action/expensebillAction'
import { useDispatch, useSelector } from "react-redux";
import { GetExpensebillDetailsById } from "../services/ExpenseBillService";



const ExpensebillForm = () => {

   const[particulars,setparticulars] = useState("");
   const[amount,setamount] = useState("");
   const[sta_tus,setsta_tus] = useState("");
   const[extensionNo,setextensionNo] = useState("");

   const expenseId = localStorage.getItem("expenseId");
   const[expense,setexpense] = useState(expenseId)

   console.log(expenseId);
   console.log(expense);

   const [file, setfile] = useState(null);

   const navigate = useNavigate();
   const {id} = useParams();

   const dispatch = useDispatch();
    const isResponse = useSelector(state=>state.expensebillReducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.expensebillReducer.isUpdateResponse)

    if(isUpdateResponse){
        alert("Your data has been updated!"); 
        navigate('/expensebilldetails')
        window.location.reload(false);
    }
    
    if(isResponse){
        alert("Your response has been submitted!");
        navigate('/expensebilldetails')
        window.location.reload(false);
    }

   const saveOrUpdateExpenseBill = (e) => {


    e.preventDefault();
    const expenseBill = {extensionNo,particulars, amount, sta_tus, expense}
    

    if(id){
        dispatch(UpdateExpensebillApiAction(expenseBill,id));
      
    }else{
        dispatch(PostExpensebillApiAction(expenseBill));
    }
    }

    useEffect(() => {
       
        GetExpensebillDetailsById(id)
               .then(
                   (response)=>{
                       console.log(response.data.payload[0]);
                       
                       setextensionNo(response.data.payload[0].extensionNo)
                       setparticulars(response.data.payload[0].particulars)
                       setamount(response.data.payload[0].amount)
                       setsta_tus(response.data.payload[0].sta_tus)
                       setexpense(response.data.payload[0].expense)
                    
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
                return <h2 style={{textAlign:'center'}}>Update Expense Bill</h2>
        }else{
               return <h2 style={{textAlign:'center'}}>Add Expense Bill</h2>
        }
      }

     const handleFileSelect = (event) =>{

        setfile(event.target.files[0])

      }

      const handleSubmit = (event) =>{
         
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        console.log('test1');
        try {
          const response = axios.post("http://localhost:8080/upload-expense-bill",
          
          formData
          )
          .then(()=>{
              console.log('hi');
          })
        } catch(error) {
          console.log(error)
        }

      }

    return ( 

        <div>

             {title()}
             <div className="signup_container">
          
          <div className="signup_form_container">  
         
          <div className="left">
                      <h1>Add your RR BILL details</h1>
                      
          </div>    
          <div className="right"> 

              <form className="container">
              
              {/* <div>
                                 <label > EXPENSE ID No:{expenseId}</label>
                                 
             </div> */}

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
                                 {/* <label > Particulars :</label> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter particulars"
                                     name = "particulars"
                                     className="input"
                                     value = {particulars}
                                     onChange = {(e) => setparticulars(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <label > Amount :</label> */}
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
             <input className="input" type="file" onChange={handleFileSelect}/>
             </div>
             <br / >
             <br / >
        
             <div>
             <Button className="green_btn" onClick={
                 (e)=>{
                     
                     saveOrUpdateExpenseBill(e);
                     handleSubmit(e);
                    }
                 } variant='warning' size="lg">Submit</Button>
             </div>
             <div>
             <Button className="green_btn" variant='danger' size="lg"><Link to="/expensebilldetails"> Cancel </Link></Button>
        </div>
             <br />                      
            

              </form>
              </div>
        </div>
        </div>

        </div>

     );
}
 
export default ExpensebillForm;