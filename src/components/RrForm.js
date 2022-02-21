import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import RrsService from '../services/RrsService';
import { Button } from "react-bootstrap";

import create from 'zustand'

const RrForm = () => {
    const [extensionNo,setextensionNo]=useState("")
    const [customer,setcustomer]=useState("")
    const [location,setlocation]=useState("")
    const [sta_tus,setsta_tus]=useState("")

    const navigate = useNavigate();
    const {id} = useParams();

    
    const saveOrUpdateRr = (e)=>{
    e.preventDefault();


    const rr = {extensionNo, customer, location}
    

    if(id){
         RrsService.updateRr(id, rr)
        .then(
            (response) => {

            console.log(response.data)    
            navigate('/rr')
        }
        )
        .catch(
            error => {
            console.log(error)
        }
        )

    }else{
        RrsService.createRr(rr)
        .then(
            (response) =>{
            
                console.log("hey")
            console.log(response.data)

            navigate('/rr');

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
       
            RrsService.getRrById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setextensionNo(response.data.payload[0].extensionNo)
                    setcustomer(response.data.payload[0].customer)
                    setlocation(response.data.payload[0].location)
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
                return <h2 >Update Rr</h2>
        }else{
               return <h2>Add Rr</h2>
        }
    }


    return ( 



         <div>
            
            {title()}
                
             
             <form style={{
             
             backgroundColor: "dark",
             padding: 6,
            }}>

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
             
             
             <br / >
                 
             
               

             

              <br / >

                  
            
        
             <div>
             <Button onClick={(e)=>{saveOrUpdateRr(e)}} variant='warning' size="lg">Submit</Button>
             </div>
             <br />
            
             
                 
             </form>

             


         </div>

     );
}
 
export default RrForm;


