// import axios from "axios";

// const OPDBILL_BASE_REST_API_URL = 'http://localhost:8080/opd/';


// class OpdBillService{


//    getAllOpdBills(){
//        return axios.get(OPDBILL_BASE_REST_API_URL);
//    }

//    getOpdBillById(opdBillId){
//        return axios.get(OPDBILL_BASE_REST_API_URL+opdBillId);
//    }

//    createOpdBill(opdBill){
//        return axios.post(OPDBILL_BASE_REST_API_URL,opdBill);
//    }

//    updateOpdBill(opdBill,opdBillId){
//        return axios.put(OPDBILL_BASE_REST_API_URL+"update/"+opdBillId,opdBill);
//    }

//    deleteOpdBill(opdBillId){
//        return axios.delete(OPDBILL_BASE_REST_API_URL+opdBillId);
//    }





// }

// export default new OpdBillService;



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

const GetOpdbillApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/opd/","GET",headers,{})
};
const PostOpdbillApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/opd/","POST",headers,data)
};
const UpdateOpdbillApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/opd/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetOpdbillDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/opd/"+id,
    "GET",
    headers,
    {})
};
const DeleteOpdbillApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/opd/"+id,
        "DELETE",
        headers,
        {})
};
export {GetOpdbillApiDetails,PostOpdbillApiDetails,UpdateOpdbillApiDetails,GetOpdbillDetailsById,DeleteOpdbillApiDetails};