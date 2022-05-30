import { GET_EXPENSEBILL_DETAILS, POST_EXPENSEBILL_DETAILS,UPDATE_EXPENSEBILL_DETAILS,DELETE_EXPENSEBILL_DETAILS } from "../type";


const initialState = {
    expensebillDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};
 

const ExpensebillReducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_EXPENSEBILL_DETAILS:
            return{
            expensebillDetails: action.payload,
        }
        case POST_EXPENSEBILL_DETAILS:
            return{
            isResponse:action.payload
        }
        case UPDATE_EXPENSEBILL_DETAILS:
            return{
            isUpdateResponse:action.payload
        }
        case DELETE_EXPENSEBILL_DETAILS:
            return{
            isDeleteResponse:action.payload
        }

        default:
            return state;
    }


}
export default ExpensebillReducer;