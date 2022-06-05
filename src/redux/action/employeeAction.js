import {GET_EMPLOYEE_DETAILS} from '../type';
import {GetEmployeeApiDetails} from '../../services/EmployeeService';


const GetEmployeeApiAction = () =>{

   return function(dispatach){
       return GetEmployeeApiDetails()
       .then((res)=>{
             console.log('Response Data is _______',res);
             dispatach({
                 type:GET_EMPLOYEE_DETAILS,
                 payload:res.data.payload[0]
             });
       });
   };
};

export {GetEmployeeApiAction};