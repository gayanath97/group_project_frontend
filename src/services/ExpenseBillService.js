import axios from "axios";

const EXPENSEBILL_BASE_REST_API_URL = 'http://localhost:8080/expensebill/';


class ExpenseBillService{


   getAllExpenseBills(){
       return axios.get(EXPENSEBILL_BASE_REST_API_URL);
   }

   getExpenseBillById(expenseBillId){
       return axios.get(EXPENSEBILL_BASE_REST_API_URL+expenseBillId);
   }

   createExpenseBill(expenseBill){
       return axios.post(EXPENSEBILL_BASE_REST_API_URL,expenseBill);
   }

   updateExpenseBill(expenseBill,expenseBillId){
       return axios.put(EXPENSEBILL_BASE_REST_API_URL+"update/"+expenseBillId,expenseBill);
   }

   deleteExpenseBill(expenseBillId){
       return axios.delete(EXPENSEBILL_BASE_REST_API_URL+expenseBillId);
   }





}

export default new ExpenseBillService;