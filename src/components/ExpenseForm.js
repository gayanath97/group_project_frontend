import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import ExpensesService from "../services/ExpensesService"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ExpenseForm = () => {

   const[buOrDept,setbuOrDept] = useState("");
   const[project,setproject] = useState("");
   const[extensionNo,setextensionNo] = useState("");
   const[customer,setcustomer] = useState("");
   const[location,setlocation] = useState("");
   const[billability,setbillability] = useState("");
   const[sta_tus,setsta_tus] = useState("")

   const navigate = useNavigate();
   const {id} = useParams();

    
    const saveOrUpdateExpense = (e)=>{

    e.preventDefault();
    const expense = {buOrDept, project, extensionNo,customer,location,billability,sta_tus}
    

    if(id){
         ExpensesService.updateExpense(expense,id)
        .then(
            (response) => {

            console.log(response.data)    
            navigate('/expense')
        }
        )
        .catch(
            error => {
            console.log(error)
        }
        )

    }else{
     ExpensesService.createExpense(expense)
        .then(
            (response) =>{
            
                console.log("hey")
            console.log(response.data)

            navigate('/expense');

        }
        )
        .catch(
            error => {
            console.log(error)
        }
        )
    }
    }

    useEffect(() => {
       
     ExpensesService.getExpenseById(id)
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
             return <h2 >Update Expense</h2>
     }else{
            return <h2>Add Expense</h2>
     }
   }


    return ( 

         <div>
             
             {title()}

             <form>

             <div>
                                 <label > BuOrDept :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter buOrDept"
                                     name = "buOrDept"
                                     value = {buOrDept}
                                     onChange = {(e) => setbuOrDept(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Project :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter project"
                                     name = "project"
                                     value = {project}
                                     onChange = {(e) => setproject(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > ExtensionNo :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter extensionNo"
                                     name = "extensionNo"
                                     value = {extensionNo}
                                     onChange = {(e) => setextensionNo(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Customer :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter customer"
                                     name = "customer"
                                     value = {customer}
                                     onChange = {(e) => setcustomer(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Location :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter location"
                                     name = "location"
                                     value = {location}
                                     onChange = {(e) => setlocation(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Billability :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter billability"
                                     name = "billability"
                                     value = {billability}
                                     onChange = {(e) => setbillability(e.target.value)}
                                 >
                                 </input>
             </div>

             <br / >
             <br / >

                  
            
        
             <div>
             <Button onClick={(e)=>{saveOrUpdateExpense(e)}} variant='warning' size="lg">Submit</Button>
             </div>
             <br />

             </form>


         </div>


     );
}
 
export default ExpenseForm;