import { GET_RRBILL_DETAILS, POST_RRBILL_DETAILS,UPDATE_RRBILL_DETAILS,DELETE_RRBILL_DETAILS } from "../type";


const initialState = {
    rrbillDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};
 

const RrbillReducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_RRBILL_DETAILS:
            return{
            rrbillDetails: action.payload,
        }
        case POST_RRBILL_DETAILS:
            return{
            isResponse:action.payload
        }
        case UPDATE_RRBILL_DETAILS:
            return{
            isUpdateResponse:action.payload
        }
        case DELETE_RRBILL_DETAILS:
            return{
            isDeleteResponse:action.payload
        }

        default:
            return state;
    }


}
export default RrbillReducer;