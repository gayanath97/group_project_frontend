// import axios from "axios";

// const EXPENSE_BASE_REST_API_URL = 'http://localhost:8080/expense/';


// class ExpensesService{


//    getAllExpenses(){
//        return axios.get(EXPENSE_BASE_REST_API_URL);
//    }

//    getExpenseById(expenseId){
//        return axios.get(EXPENSE_BASE_REST_API_URL+expenseId);
//    }

//    createExpense(expense){
//        return axios.post(EXPENSE_BASE_REST_API_URL,expense);
//    }

//    updateExpense(expense,expenseId){
//        return axios.put(EXPENSE_BASE_REST_API_URL+"update/"+expenseId,expense);
//    }

//    deleteExpense(expenseId){
//        return axios.delete(EXPENSE_BASE_REST_API_URL+expenseId);
//    }

// }
// export default new ExpensesService;


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

const GetExpenseApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/expense/","GET",headers,{})
};
const PostExpenseApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/expense/","POST",headers,data)
};
const UpdateExpenseApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/expense/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetExpenseDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/expense/"+id,
    "GET",
    headers,
    {})
};
const DeleteExpenseApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/expense/"+id,
        "DELETE",
        headers,
        {})
};
export {GetExpenseApiDetails,PostExpenseApiDetails,UpdateExpenseApiDetails,GetExpenseDetailsById,DeleteExpenseApiDetails};