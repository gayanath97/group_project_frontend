import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import axios from 'axios';
import { Button } from "react-bootstrap";

import {PostRrbillApiAction,UpdateRrbillApiAction} from '../redux/action/rrbillAction'
import { useDispatch, useSelector } from "react-redux";
import { GetRrbillDetailsById } from "../services/RrbillsService";


const AddRrbill = () => {

    const [extensionNo,setextensionNo]=useState("")
    const [amount,setamount]=useState("")
    const [particulars,setparticulars]=useState("")
    const [date,setdate]=useState("")

    const rrId = localStorage.getItem("rrId");
    const [ rr,setrr] = useState(rrId)

   console.log(rrId);
   console.log(rr);
    
    const [file, setfile] = useState(null);
    
    const navigate = useNavigate();
    const {idd} = useParams();

    const dispatch = useDispatch();
    const isResponse = useSelector(state=>state.rrbillReducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.rrbillReducer.isUpdateResponse)

    if(isUpdateResponse){
        alert("Your data has been updated!"); 
        navigate('/rrbilldetails')
        window.location.reload(false);
    }
    
    if(isResponse){
        alert("Your response has been submitted!");
        navigate('/rrbilldetails')
        window.location.reload(false);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        console.log('test1');
        try {
          const response = axios.post("http://localhost:8080/upload-rr-bill",
          
          formData
          )
          .then(()=>{
              console.log('hi');
          })
        } catch(error) {
          console.log(error)
        }
      }
    
      const handleFileSelect = (event) => {
          console.log('hehe');
        setfile(event.target.files[0])
      }
    
    


    const saveOrUpdateRrbill = (e)=>{
    e.preventDefault();


    const rrbill = {extensionNo,amount, particulars, date,rr}

    const config = {
        headers: { Authorization: localStorage.getItem("accessToken") }
    };

    

    if(idd){
        dispatch(UpdateRrbillApiAction(rrbill,idd));

    }else{
        
        dispatch(PostRrbillApiAction(rrbill));
    }
    }

    useEffect(() => {
       GetRrbillDetailsById(idd)
        
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setextensionNo(response.data.payload[0].extensionNo)
                    setamount(response.data.payload[0].amount)
                    setparticulars(response.data.payload[0].particulars)
                    setdate(response.data.payload[0].date)
                    setrr(response.data.payload[0].rr)
                    
                    
                }
                
            )
            .catch(
                (error)=>{
                     console.log(error)
                }
            )
            
        
    }, [])



    const title = ()=>{
        if(idd){
                return <h2 style={{textAlign:'center'}}>Update Rrbill</h2>
        }else{
               return <h2 style={{textAlign:'center'}}>Add Rrbill</h2>
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
                                 <label > RR ID No:{rrId}</label>
                                 
             </div> */}
             <br />
             <div>
                                 {/* <div><label > Extensio No:</label></div> */}
                                 <input
                                     type = "text"
                                     placeholder = "Enter Extension No"
                                     name = "extensionNo"
                                     className="input"
                                     value = {extensionNo}
                                     onChange = {(e) => setextensionNo(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 {/* <div><label > Amount :</label></div> */}
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
                                 {/* <div><label > Particulars :</label></div> */}
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
                                 <div><label > Date :</label></div>
                                 <input
                                     type = "date"
                                     placeholder = "Enter date"
                                     name = "date"
                                     className="input"
                                     value = {date}
                                     onChange = {(e) => {
                                         setdate(e.target.value);
                                    }
                                    }
                                 >
                                 </input>
             </div>
             
             <br />
             <input className="input" type="file" onChange={handleFileSelect}/>

             <br / >
            {/* <RrBillUpload /> */}

             <div>
             <Button className="green_btn" onClick={(e)=>{
                // console.log(rr);
                 saveOrUpdateRrbill(e);
                 handleSubmit(e);
                 }
                 } variant='warning' size="lg">Submit </Button>
             </div>
             <div>
             <Button className="green_btn" variant='danger' size="lg"><Link to="/rrbilldetails"> Cancel </Link></Button>
        </div>
             <br />
             
             
                 
             </form>

             </div>
        </div>
        </div>


         </div>

     );


}
 
export default AddRrbill;