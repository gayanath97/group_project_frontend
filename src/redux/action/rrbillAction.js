import { GET_RRBILL_DETAILS, POST_RRBILL_DETAILS ,UPDATE_RRBILL_DETAILS,DELETE_RRBILL_DETAILS} from "../type" 
import {GetRrbillApiDetails, PostRrbillApiDetails,UpdateRrbillApiDetails,DeleteRrbillApiDetails } from "../../services/RrbillsService";
const GetRrbillApiAction = () =>{

    return function(dispatach){
        return GetRrbillApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_RRBILL_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostRrbillApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_RRBILL_DETAILS,
           payload:false
        });
        return PostRrbillApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_RRBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateRrbillApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_RRBILL_DETAILS,
           payload:false
        });
        return  UpdateRrbillApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_RRBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteRrbillApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_RRBILL_DETAILS,
           payload:false
        });
        return DeleteRrbillApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_RRBILL_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetRrbillApiAction,PostRrbillApiAction,UpdateRrbillApiAction,DeleteRrbillApiAction};