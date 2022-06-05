import {GET_EMPLOYEE_DETAILS} from "../type";

const initialState = {
    employeeDetails : []
};


const EmployeeReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_EMPLOYEE_DETAILS:
            return{
               employeeDetails : action.payload
            }
            default:
                return state;
    }
}
 
export default EmployeeReducer;