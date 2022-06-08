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

const GetOpdamountApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/opdamount/","GET",headers,{})
};
const PostOpdamountApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/opdamount/","POST",headers,data)
};
const UpdateOpdamountApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/opdamount/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetOpdamountDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/opdamount/"+id,
    "GET",
    headers,
    {})
};
const DeleteOpdamountApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/opdamount/"+id,
        "DELETE",
        headers,
        {})
};
export {GetOpdamountApiDetails,PostOpdamountApiDetails,UpdateOpdamountApiDetails,GetOpdamountDetailsById,DeleteOpdamountApiDetails};