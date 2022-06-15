import { useState,useEffect } from "react";
import ExpensesService from "../services/ExpensesService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { GetExpenseApiAction,DeleteExpenseApiAction } from '../redux/action/expenseAction';


const ExpenseDetails = () => {

  const [search, setNewSearch] = useState("");

const dispatch = useDispatch();
const responseData = useSelector(state=>state.expenseReducer.expenseDetails)
const isDeleteResponse = useSelector(state=>state.expenseReducer.isDeleteResponse)



useEffect(() => {
  dispatch(GetExpenseApiAction());
  }, [dispatch])

//   if(isDeleteResponse){
//     alert("Your data has been deleted!")
//     window.location.reload(false)
// }

const employeeId= localStorage.getItem('userId');
   const filtered = !search
    ? responseData.filter((e)=>{return e.employee==employeeId })
    : null

    return ( 

      <div>

<Table striped borderd hover variant="light">
            <thead>
                <th>Employee Id Id</th>
                <th>Expense Id</th>
                <th>BuOrDept</th>
                <th>Project</th>
                <th>ExtensionNo</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Billability</th>
                <th>Status</th>
                <th>Bills</th>
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    filtered?
                    filtered.map(

                        expense =>{
                        return(
                        <tr key={expense.id}>
                               <td>{expense.employee}</td>
                               <td>{expense.id}</td>
                               <td>{expense.buOrDept}</td>
                               <td>{expense.project}</td>
                               <td>{expense.extensionNo}</td>
                               <td>{expense.customer}</td>
                               <td>{expense.location}</td>
                               <td>{expense.billability}</td>
                               <td>{expense.sta_tus}</td>
                               <td>
                               <Button className="green_btn" onClick={()=>{
                                 localStorage.setItem('extNoExp', expense.extensionNo);
                                 localStorage.setItem('expenseId',expense.id);
                                 console.log(localStorage.getItem('expenseId'))
                                 }} variant="warning"> <Link to={`/expensebilldetails/`} >View</Link></Button>
                               </td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}
                               <Button className="green_btn"  variant="warning"> <Link to={`/edit-expense/${expense.id}`} >Update</Link></Button>
                               <Button className="green_btn" onClick = {() => {
                                 dispatch(DeleteExpenseApiAction(expense.id))
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
 
export default ExpenseDetails;