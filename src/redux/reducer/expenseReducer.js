import { GET_EXPENSE_DETAILS, POST_EXPENSE_DETAILS,UPDATE_EXPENSE_DETAILS,DELETE_EXPENSE_DETAILS } from "../type";


const initialState = {
    expenseDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};
 

const ExpenseReducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_EXPENSE_DETAILS:
            return{
            expenseDetails: action.payload,
        }
        case POST_EXPENSE_DETAILS:
            return{
            isResponse:action.payload
        }
        case UPDATE_EXPENSE_DETAILS:
            return{
            isUpdateResponse:action.payload
        }
        case DELETE_EXPENSE_DETAILS:
            return{
            isDeleteResponse:action.payload
        }

        default:
            return state;
    }


}
export default ExpenseReducer;