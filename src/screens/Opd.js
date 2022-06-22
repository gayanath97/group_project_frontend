import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import OpdDetails from "../components/OpdDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { GetOpdDetailsById } from "../services/GetOpdAmountByEmpId.js";
import { useEffect, useState } from "react";


const Opd = () => {

    const [amount,setamount] = useState("");
    const [expireDate,setExpireDate] = useState("");

    useEffect((e)=>{

        GetOpdDetailsById(localStorage.getItem("userId"))
        .then((res)=>{
            console.log(res.data)
       //  console.log(res.data.payload[0].amount);
       //  console.log(res.data.payload[0].expireDate);
         setamount(res.data.payload[0].amount)
         setExpireDate(res.data.payload[0].expireDate)
        }).catch((e)=>{
           //console.log(e)
        })
    
      },[])

    return ( 
        <div>
        <Header />
      
        <br />
        <h1 style={{textAlign:'center'}}>OPD Medical Expenses</h1>
        <br />
        <h5>Your Total opd amount is {amount}.</h5>
       <h5>It will expire on {expireDate}.</h5>
        <Button className="green_btn" variant="info" ><Link to="/addopd">Add a claim</Link></Button>
        <OpdDetails />
        
        <br />
        <br />
        <br />
        <Footer />

        </div>

     );
}
 
export default Opd;