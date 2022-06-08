import {GET_OPDAMOUNT_DETAILS,POST_OPDAMOUNT_DETAILS,UPDATE_OPDAMOUNT_DETAILS,DELETE_OPDAMOUNT_DETAILS} from "../type"

const initialState = {
    opdamountDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};

const opdamountReducer = (state=initialState,action)=>{

switch(action.type){
    case GET_OPDAMOUNT_DETAILS:
        return{
            opdamountDetails:action.payload
        }
    case POST_OPDAMOUNT_DETAILS:
        return{
            isResponse:action.payload
            }
    case UPDATE_OPDAMOUNT_DETAILS:
         return{
            isUpdateResponse:action.payload
                }
     case DELETE_OPDAMOUNT_DETAILS:
        return{
            isDeleteResponse:action.payload
                    }
     default:
         return state;               
}


}


export default opdamountReducer;