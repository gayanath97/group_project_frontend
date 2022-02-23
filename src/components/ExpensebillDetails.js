import { useState,useEffect } from "react";
import ExpenseBillService from "../services/ExpenseBillService"
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExpensebillDetails = () => {
    const[expensebills,setexpensebills] = useState([]);
   
   useEffect(() => {

    getAllExpensebills();

    }, [])

    const getAllExpensebills = () =>
    {
      ExpenseBillService.getAllExpenseBills()
      .then(
        (response)=>{
              
          setexpensebills(response.data.payload[0]);
          console.log(response.data);

        }
        
      )
      .catch(
        error=>{
          console.log(error);
        }
      )
    }

    const deleteExpenseBill = (id) => {

      ExpenseBillService.deleteExpenseBill(id)
      .then(
          (response) =>{
       getAllExpensebills();
  
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
                <th>Expense Bill Id</th>
                <th>ExtensionNo</th>
                <th>Particulars</th>
                <th>Amount</th>
                <th>Sta_tus</th>
                
                
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    expensebills.map(

                        expensebill =>
                        
                        <tr key={expensebill.id}>
                               <td>{expensebill.id}</td>
                               <td>{expensebill.extensionNo}</td>
                               <td>{expensebill.particulars}</td>
                               <td>{expensebill.amount}</td>
                               <td>{expensebill.sta_tus}</td>
                               
                               <td>
                               
                               <Button variant="warning"> <Link to={`/edit-expensebill/${expensebill.id}`} >Update</Link></Button>
                               <Button  onClick = {() => deleteExpenseBill(expensebill.id)}
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
 
export default ExpensebillDetails;