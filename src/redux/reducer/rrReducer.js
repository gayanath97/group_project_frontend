import { GET_RR_DETAILS, POST_RR_DETAILS,UPDATE_RR_DETAILS,DELETE_RR_DETAILS } from "../type";


const initialState = {
    rrDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};
 

const RrReducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_RR_DETAILS:
            return{
            rrDetails: action.payload,
        }
        case POST_RR_DETAILS:
            return{
            isResponse:action.payload
        }
        case UPDATE_RR_DETAILS:
            return{
            isUpdateResponse:action.payload
        }
        case DELETE_RR_DETAILS:
            return{
            isDeleteResponse:action.payload
        }

        default:
            return state;
    }


}
export default RrReducer;