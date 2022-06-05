import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from "react-redux";
import { GetEmployeeApiAction } from '../redux/action/employeeAction';



const EmployeeDetails = () => {
 
   const [search,setNewSearch] = useState("");
   const dispatch = useDispatch();
   const responseData =  useSelector(state=>state.employeeReducer.employeeDetails) 
   console.log(responseData); 

   useEffect(()=>{
       dispatch(GetEmployeeApiAction());
       
   },[dispatch])

    const handleSearchChange = (e)=>{
        setNewSearch(e.target.value);
       }

  
       const filtered = !search
      ? responseData
      : responseData.filter((e) =>
            e.id.toLowerCase().includes(search.toLowerCase())
        );
   
   return ( 
        <div>
            
       <br />
          Filter employee by id:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br />
         
       <Table striped borderd hover variant="light">
           <thead>
                  <th>Employee Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Phone Number</th>
           </thead>
                {
               filtered?
               filtered.map(
                   (employee)=>{
                       return(
                      <tr key = {employee.id}>
                         <td>{employee.id}</td>
                         <td>{employee.firstName}</td>
                         <td>{employee.lastName}</td>
                         <td>{employee.userName}</td>
                         <td>{employee.email}</td>
                         <td>{employee.phoneNumber}</td>
                      </tr>
                       )
                   }
               ):null
                }
           <tbody>

           </tbody>
       </Table>



        </div>
     );
}
 
export default EmployeeDetails;