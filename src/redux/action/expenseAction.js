import { GET_EXPENSE_DETAILS, POST_EXPENSE_DETAILS ,UPDATE_EXPENSE_DETAILS,DELETE_EXPENSE_DETAILS} from "../type" 
import {GetExpenseApiDetails, PostExpenseApiDetails,UpdateExpenseApiDetails,DeleteExpenseApiDetails } from "../../services/ExpensesService";

const GetExpenseApiAction = () =>{

    return function(dispatach){
        return GetExpenseApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_EXPENSE_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostExpenseApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_EXPENSE_DETAILS,
           payload:false
        });
        return PostExpenseApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_EXPENSE_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateExpenseApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_EXPENSE_DETAILS,
           payload:false
        });
        return  UpdateExpenseApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_EXPENSE_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteExpenseApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_EXPENSE_DETAILS,
           payload:false
        });
        return DeleteExpenseApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_EXPENSE_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetExpenseApiAction,PostExpenseApiAction,UpdateExpenseApiAction,DeleteExpenseApiAction};