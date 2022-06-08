import {GET_REWARDAMOUNT_DETAILS,POST_REWARDAMOUNT_DETAILS,UPDATE_REWARDAMOUNT_DETAILS,DELETE_REWARDAMOUNT_DETAILS} from "../type"

const initialState = {
    rewardamountDetails:[],
    isResponse:false,
    isUpdateResponse:false,
    isDeleteResponse:false
};

const rewardamountReducer = (state=initialState,action)=>{

switch(action.type){
    case GET_REWARDAMOUNT_DETAILS:
        return{
            rewardamountDetails:action.payload
        }
    case POST_REWARDAMOUNT_DETAILS:
        return{
            isResponse:action.payload
            }
    case UPDATE_REWARDAMOUNT_DETAILS:
         return{
            isUpdateResponse:action.payload
                }
     case DELETE_REWARDAMOUNT_DETAILS:
        return{
            isDeleteResponse:action.payload
                    }
     default:
         return state;               
}


}


export default rewardamountReducer;