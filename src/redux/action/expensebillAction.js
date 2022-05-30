import { GET_EXPENSEBILL_DETAILS, POST_EXPENSEBILL_DETAILS ,UPDATE_EXPENSEBILL_DETAILS,DELETE_EXPENSEBILL_DETAILS} from "../type" 
import {GetExpensebillApiDetails, PostExpensebillApiDetails,UpdateExpensebillApiDetails,DeleteExpensebillApiDetails } from "../../services/ExpenseBillService";

const GetExpensebillApiAction = () =>{

    return function(dispatach){
        return GetExpensebillApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_EXPENSEBILL_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostExpensebillApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_EXPENSEBILL_DETAILS,
           payload:false
        });
        return PostExpensebillApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_EXPENSEBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateExpensebillApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_EXPENSEBILL_DETAILS,
           payload:false
        });
        return  UpdateExpensebillApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_EXPENSEBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteExpensebillApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_EXPENSEBILL_DETAILS,
           payload:false
        });
        return DeleteExpensebillApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_EXPENSEBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetExpensebillApiAction,PostExpensebillApiAction,UpdateExpensebillApiAction,DeleteExpensebillApiAction};