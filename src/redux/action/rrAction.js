import { GET_RR_DETAILS, POST_RR_DETAILS ,UPDATE_RR_DETAILS,DELETE_RR_DETAILS} from "../type" 
import {GetRrApiDetails, PostRrApiDetails,UpdateRrApiDetails,DeleteRrApiDetails } from "../../services/RrsService";
const GetRrApiAction = () =>{

    return function(dispatach){
        return GetRrApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_RR_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostRrApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_RR_DETAILS,
           payload:false
        });
        return PostRrApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_RR_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateRrApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_RR_DETAILS,
           payload:false
        });
        return  UpdateRrApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_RR_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteRrApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_RR_DETAILS,
           payload:false
        });
        return DeleteRrApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_RR_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetRrApiAction,PostRrApiAction,UpdateRrApiAction,DeleteRrApiAction};