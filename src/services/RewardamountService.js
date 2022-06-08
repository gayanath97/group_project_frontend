import axios from "axios";

export async function AxiosRequest(url,method,headers,params) {

    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{},
        timeout:1000
    });
}

const GetRewardamountApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/reward/","GET",headers,{})
};
const PostRewardamountApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/reward/","POST",headers,data)
};
const UpdateRewardamountApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/reward/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetRewardamountDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/reward/"+id,
    "GET",
    headers,
    {})
};
const DeleteRewardamountApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/reward/"+id,
        "DELETE",
        headers,
        {})
};
export {GetRewardamountApiDetails,PostRewardamountApiDetails,UpdateRewardamountApiDetails,GetRewardamountDetailsById,DeleteRewardamountApiDetails};