import {GET_OPDAMOUNT_DETAILS, POST_OPDAMOUNT_DETAILS,UPDATE_OPDAMOUNT_DETAILS,DELETE_OPDAMOUNT_DETAILS} from '../type'
import {GetOpdamountApiDetails,PostOpdamountApiDetails,UpdateOpdamountApiDetails,DeleteOpdamountApiDetails} from '../../services/OpdamountService'


const GetOpdAmountApiAction = () =>{

    return function(dispatach){
        return GetOpdamountApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_OPDAMOUNT_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostOpdAmountApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_OPDAMOUNT_DETAILS,
           payload:false
        });
        return PostOpdamountApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_OPDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateOpdAmountApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_OPDAMOUNT_DETAILS,
           payload:false
        });
        return  UpdateOpdamountApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_OPDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteOpdAmountApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_OPDAMOUNT_DETAILS,
           payload:false
        });
        return DeleteOpdamountApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_OPDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetOpdAmountApiAction,PostOpdAmountApiAction,UpdateOpdAmountApiAction,DeleteOpdAmountApiAction};