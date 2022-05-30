import { GET_OPDBILL_DETAILS, POST_OPDBILL_DETAILS,UPDATE_OPDBILL_DETAILS,DELETE_OPDBILL_DETAILS } from "../type";


const initialState = {
    opdbillDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};
 

const OpdReducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_OPDBILL_DETAILS:
            return{
            opdbillDetails: action.payload,
        }
        case POST_OPDBILL_DETAILS:
            return{
            isResponse:action.payload
        }
        case UPDATE_OPDBILL_DETAILS:
            return{
            isUpdateResponse:action.payload
        }
        case DELETE_OPDBILL_DETAILS:
            return{
            isDeleteResponse:action.payload
        }

        default:
            return state;
    }


}
export default OpdReducer;