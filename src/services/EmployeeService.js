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
const GetEmployeeApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/employee/","GET",headers,{})
};
const GetEmployeeDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/employee/"+id,
    "GET",
    headers,
    {})
};

export  {GetEmployeeApiDetails,GetEmployeeDetailsById};