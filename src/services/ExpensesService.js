import axios from "axios";

const EXPENSE_BASE_REST_API_URL = 'http://localhost:8080/expense/';


class ExpenseService{


   getAllExpenses(){
       return axios.get(EXPENSE_BASE_REST_API_URL);
   }

   getExpenseById(expenseId){
       return axios.get(EXPENSE_BASE_REST_API_URL+expenseId);
   }

   createExpense(expense){
       return axios.post(EXPENSE_BASE_REST_API_URL,expense);
   }

   updateExpense(expense,expenseId){
       return axios.put(EXPENSE_BASE_REST_API_URL+"update/"+expenseId,expense);
   }

   deleteExpense(expenseId){
       return axios.delete(EXPENSE_BASE_REST_API_URL+expenseId);
   }





}