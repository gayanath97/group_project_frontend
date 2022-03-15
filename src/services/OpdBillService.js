import axios from "axios";

const OPDBILL_BASE_REST_API_URL = 'http://localhost:8080/opd/';


class OpdBillService{


   getAllOpdBills(){
       return axios.get(OPDBILL_BASE_REST_API_URL);
   }

   getOpdBillById(opdBillId){
       return axios.get(OPDBILL_BASE_REST_API_URL+opdBillId);
   }

   createOpdBill(opdBill){
       return axios.post(OPDBILL_BASE_REST_API_URL,opdBill);
   }

   updateOpdBill(opdBill,opdBillId){
       return axios.put(OPDBILL_BASE_REST_API_URL+"update/"+opdBillId,opdBill);
   }

   deleteOpdBill(opdBillId){
       return axios.delete(OPDBILL_BASE_REST_API_URL+opdBillId);
   }





}

export default new OpdBillService;