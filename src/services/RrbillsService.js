// import axios from "axios";

// const RRBILL_BASE_REST_API_URL = 'http://localhost:8080/rrbill/';

// class RrbillsService {

    

//     getAllRrbills(){
//               return axios.get(RRBILL_BASE_REST_API_URL);
//     }
    
//     createRrbill(rrbill){
//         return axios.post(RRBILL_BASE_REST_API_URL,rrbill)
//     }   
//     getRrbillById(rrbillId){
//         return axios.get(RRBILL_BASE_REST_API_URL + rrbillId)
//     } 
//     updateRrbill(rrbillId,rrbill){
//         return axios.put(RRBILL_BASE_REST_API_URL+"update/"+rrbillId,rrbill)
//     } 
    
//     deleteRrbill(rrbillId){
//         return axios.delete(RRBILL_BASE_REST_API_URL+rrbillId)
//     }

             
// }

// export default new RrbillsService();



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

const GetRrbillApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/rrbill/","GET",headers,{})
};
const PostRrbillApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/rrbill/","POST",headers,data)
};
const UpdateRrbillApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/rrbill/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetRrbillDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/rrbill/"+id,
    "GET",
    headers,
    {})
};
const DeleteRrbillApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/rrbill/"+id,
        "DELETE",
        headers,
        {})
};
export {GetRrbillApiDetails,PostRrbillApiDetails,UpdateRrbillApiDetails,GetRrbillDetailsById,DeleteRrbillApiDetails};