import { Button } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import OpdBillService from "../services/OpdBillService";
import axios from "axios";

const OpdbillForm = () => {

   const [file, setfile] = useState(null);

   const navigate = useNavigate();
   const {id} = useParams();

   const[amount,setamount] = useState("");
   const[particulars,setparticulars] = useState("");
   const[date,setdate] = useState("");
//    const[sta_tus,setsta_tus] = useState("");


   const saveOrUpdateOpdBill = (e) => {


    e.preventDefault();
    const opdBill = {amount,particulars,date}
    

    if(id){
         OpdBillService.updateOpdBill(opdBill,id)
        .then(
            (response) => {

            console.log(response.data)    
            navigate('/opd')
        }
        )
        .catch(
            error => {
            console.log(error)
        }
        )

    }else{
     OpdBillService.createOpdBill(opdBill)
        .then(
            (response) =>{
            
                console.log("hey")
            console.log(response.data)

            navigate('/opd');

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
       
        OpdBillService.getOpdBillById(id)
               .then(
                   (response)=>{
                       console.log(response.data.payload[0]);
                       
                       setamount(response.data.payload[0].amount)
                       setparticulars(response.data.payload[0].particulars)
                       setdate(response.data.payload[0].date)
                    //    setsta_tus(response.data.payload[0].sta_tus)
                    
                   }
               )
               .catch(
                   (error)=>{
                        console.log(error)
                   }
               )
   
              
           
       }, [])
    const handleFileSelect = (event) =>{

        setfile(event.target.files[0])

      }
    
    const handleSubmit = (event) =>{
         
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        console.log('test1');
        try {
          const response = axios.post("http://localhost:8080/upload-opd-bill",
          
          formData
          )
          .then(()=>{
              console.log('hi');
          })
        } catch(error) {
          console.log(error)
        }

      }

    const title = ()=>{
        if(id){
                return <h2 >Update Opd Bill</h2>
        }else{
               return <h2>Add Opd Bill</h2>
        }
      }
    return ( 
        

        <div>
          
          {title()}

          <form>

          <div>
                                 <label > Amount :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter amount"
                                     name = "amount"
                                     value = {amount}
                                     onChange = {(e) => setamount(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Particulars :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter particulars"
                                     name = "particulars"
                                     value = {particulars}
                                     onChange = {(e) => setparticulars(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
                                 <label > Date :</label>
                                 <input
                                     type = "date"
                                     placeholder = "Enter date"
                                     name = "date"
                                     value = {date}
                                     onChange = {(e) => setdate(e.target.value)}
                                 >
                                 </input>
             </div>

             <div>
             <input type="file" onChange={handleFileSelect}/>
             </div>
             <br / >
             <br / >

             <div>
             <Button onClick={
                 (e)=>{
                     saveOrUpdateOpdBill(e);
                     handleSubmit(e);
                    }
                 } variant='warning' size="lg">Submit</Button>
             </div>
             <br /> 

          </form>


        </div>
    

     );
}
 
export default OpdbillForm;