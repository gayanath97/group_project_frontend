// import axios from "axios";

// const EXPENSEBILL_BASE_REST_API_URL = 'http://localhost:8080/expensebill/';


// class ExpenseBillService{


//    getAllExpenseBills(){
//        return axios.get(EXPENSEBILL_BASE_REST_API_URL);
//    }

//    getExpenseBillById(expenseBillId){
//        return axios.get(EXPENSEBILL_BASE_REST_API_URL+expenseBillId);
//    }

//    createExpenseBill(expenseBill){
//        return axios.post(EXPENSEBILL_BASE_REST_API_URL,expenseBill);
//    }

//    updateExpenseBill(expenseBill,expenseBillId){
//        return axios.put(EXPENSEBILL_BASE_REST_API_URL+"update/"+expenseBillId,expenseBill);
//    }

//    deleteExpenseBill(expenseBillId){
//        return axios.delete(EXPENSEBILL_BASE_REST_API_URL+expenseBillId);
//    }





// }

// export default new ExpenseBillService;


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

const GetExpensebillApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/expensebill/","GET",headers,{})
};
const PostExpensebillApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/expensebill/","POST",headers,data)
};
const UpdateExpensebillApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/expensebill/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetExpensebillDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/expensebill/"+id,
    "GET",
    headers,
    {})
};
const DeleteExpensebillApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/expensebill/"+id,
        "DELETE",
        headers,
        {})
};
export {GetExpensebillApiDetails,PostExpensebillApiDetails,UpdateExpensebillApiDetails,GetExpensebillDetailsById,DeleteExpensebillApiDetails};