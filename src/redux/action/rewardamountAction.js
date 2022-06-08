import {GET_REWARDAMOUNT_DETAILS, POST_REWARDAMOUNT_DETAILS,UPDATE_REWARDAMOUNT_DETAILS,DELETE_REWARDAMOUNT_DETAILS} from '../type'
import {GetRewardamountApiDetails,PostRewardamountApiDetails,UpdateRewardamountApiDetails,DeleteRewardamountApiDetails} from '../../services/RewardamountService'


const GetRewardAmountApiAction = () =>{

    return function(dispatach){
        return GetRewardamountApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_REWARDAMOUNT_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostRewardAmountApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_REWARDAMOUNT_DETAILS,
           payload:false
        });
        return PostRewardamountApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_REWARDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateRewardAmountApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_REWARDAMOUNT_DETAILS,
           payload:false
        });
        return  UpdateRewardamountApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_REWARDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteRewardAmountApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_REWARDAMOUNT_DETAILS,
           payload:false
        });
        return DeleteRewardamountApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_REWARDAMOUNT_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetRewardAmountApiAction,PostRewardAmountApiAction,UpdateRewardAmountApiAction,DeleteRewardAmountApiAction};