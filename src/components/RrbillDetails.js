import { useState,useEffect } from "react";
import {Link } from "react-router-dom";
import RrbillsService from "../services/RrbillsService.js"
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const RrbillDetails = () => {

   

    const [rrbills,setrrbills] = useState([])

    // const [amount,setamount] = useState("")
    // const [particulars,setparticulars] = useState("")
    // const [date,setdate] = useState("")

    useEffect(() => {

        getAllRrbills();
    
        }, [])


    const getAllRrbills = () =>
    {
     RrbillsService.getAllRrbills()
      .then(
          (response)=>{
              setrrbills(response.data.payload[0]);
              console.log(response.data)
          }
      )
      .catch(
          error=>{
              console.log(error);
          }
      )
}


    const deleteRrbill = (id) => {
        RrbillsService.deleteRrbill(id)
        .then(
            (response) =>{
         getAllRrbills();
    
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

              
              <div>
              <Table striped borderd hover variant="light" >
            <thead>
                <th>Extension No</th>
                <th>RrBill Id</th>
                <th>Amount</th>
                <th>Particulars</th>
                <th>Date</th>
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                    rrbills.map(

                        rrbill =>
                        (
                        <tr key={rrbill.id}>
                               <td>{rrbill.extensionNo}</td>
                               <td>{rrbill.id}</td>
                               <td>{rrbill.amount}</td>
                               <td>{rrbill.particulars}</td>
                               <td>{rrbill.date}</td>
                               <td>
                              <Button variant="warning"> <Link to={`/edit-rrbill/${rrbill.id}`} >Update</Link></Button>
                               <Button  onClick = {() => deleteRrbill(rrbill.id)}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                               <br />
                               </td>
                               
                        </tr>
                        )
                    )
             }    
            </tbody>
            
            </Table>
              </div>
             
              </div> 


    );
}
 
export default RrbillDetails;