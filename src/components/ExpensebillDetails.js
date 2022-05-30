import { useState,useEffect } from "react";
import ExpenseBillService from "../services/ExpenseBillService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { GetExpensebillApiAction,DeleteExpensebillApiAction } from '../redux/action/expensebillAction';

const ExpensebillDetails = () => {

    const [search, setNewSearch] = useState("");

    const dispatch = useDispatch();
    const responseData = useSelector(state=>state.expensebillReducer.expensebillDetails)
    
   
    useEffect(() => {
      dispatch(GetExpensebillApiAction());
      }, [dispatch])



    // const handleSearchChange = (e)=>{
    //   setNewSearch(e.target.value);
    //  }

    const expenseId= localStorage.getItem('expenseId');
    const filtered = !search
     ? responseData.filter((e)=>{return e.expense==expenseId })
     : null

    return ( 

      <div>

{/* <br />
          Filter your expense bill by extensionNo:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br /> */}

<Table striped borderd hover variant="light">
            <thead>
                <th>Expense_ID</th>
                <th>Expense Bill Id</th>
                <th>ExtensionNo</th>
                <th>Particulars</th>
                <th>Amount</th>
                <th>Sta_tus</th>
                
                
                
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    filtered?
                    filtered.map(

                        expensebill =>{
                        return(
                        <tr key={expensebill.id}>
                               <td>{expensebill.expense}</td>
                               <td>{expensebill.id}</td>
                               <td>{expensebill.extensionNo}</td>
                               <td>{expensebill.particulars}</td>
                               <td>{expensebill.amount}</td>
                               <td>{expensebill.sta_tus}</td>
                               
                               
                               <td>
                               
                               <Button variant="warning"> <Link to={`/edit-expensebill/${expensebill.id}`} >Update</Link></Button>
                               <Button  onClick = {() =>{ 
                               dispatch(DeleteExpensebillApiAction(expensebill.id))
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
 
export default ExpensebillDetails;