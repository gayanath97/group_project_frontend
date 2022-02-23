import { useState,useEffect } from "react";
import ExpensesService from "../services/ExpensesService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExpenseDetails = () => {

   const[expenses,setexpenses] = useState([]);
   
   useEffect(() => {

    getAllExpenses();

    }, [])

    const getAllExpenses = () =>
    {
      ExpensesService.getAllExpenses()
      .then(
        (response)=>{
              
          setexpenses(response.data.payload[0]);
          console.log(response.data);

        }
        
      )
      .catch(
        error=>{
          console.log(error);
        }
      )
    }

    const deleteExpense = (id) => {

      ExpensesService.deleteExpense(id)
      .then(
          (response) =>{
       getAllExpenses();
  
      }
      )
      .catch(
          error =>{
          console.log(error);
      }
      )

    }

    return ( 

      <div>

<Table striped borderd hover variant="light">
            <thead>
                <th>Expense Id</th>
                <th>BuOrDept</th>
                <th>Project</th>
                <th>ExtensionNo</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Billability</th>
                <th>Status</th>
                
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    expenses.map(

                        expense =>
                        
                        <tr key={expense.id}>
                               <td>{expense.id}</td>
                               <td>{expense.buOrDept}</td>
                               <td>{expense.project}</td>
                               <td>{expense.extensionNo}</td>
                               <td>{expense.customer}</td>
                               <td>{expense.location}</td>
                               <td>{expense.billability}</td>
                               <td>{expense.sta_tus}</td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}
                               <Button variant="warning"> <Link to={`/edit-expense/${expense.id}`} >Update</Link></Button>
                               <Button  onClick = {() => deleteExpense(expense.id)}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                               </td>
                        </tr>

                    )
             }       
            </tbody>
        </Table>



      </div>

     );
}
 
export default ExpenseDetails;