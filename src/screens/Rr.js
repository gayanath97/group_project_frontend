import Header from "../components/Header";
import Footer from "../components/Footer";
import RrDetails from "../components/RrDetails";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import '../style/components/Form.css'
import { GetRewardDetailsById } from "../services/GetRewardAmountByEmpId.js";
import { useEffect, useState } from "react";

const Rr = () => {

  const [amount,setamount] = useState("");
  const [addedDate,setAddedDate] = useState("");
  const [expireDate,setExpireDate] = useState("");
  

  useEffect((e)=>{

    GetRewardDetailsById(localStorage.getItem("userId"))
    .then((res)=>{
     console.log(res.data.payload[0].amount);
     console.log(res.data.payload[0].addedDate);
     console.log(res.data.payload[0].expireDate);
     setamount(res.data.payload[0].amount)
     setAddedDate(res.data.payload[0].addedDate)
     setExpireDate(res.data.payload[0].expireDate)
    }).catch((e)=>{
       //console.log(e)
    })

  },[])

  
    
    return ( 

    <div >
       <Header />
      
       <br />
       <h1 style={{textAlign:'center'}}>Reward & Recognitions</h1>
       <br />
       <h5>Your Total reward amount is {amount}.</h5>
       <h5>It added on {addedDate}.</h5>
       <h5>It will expire on {expireDate}.</h5>
       {/* AddRr */}
       <Button className="green_btn" variant="info" ><Link to="/addrr">Add a claim</Link></Button>
       <RrDetails />
       <br />
       
       <br />
       <br />
       <Footer />

       </div>

     );
}
 
export default Rr;