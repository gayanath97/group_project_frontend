import axios from "axios";

const RRBILL_BASE_REST_API_URL = 'http://localhost:8080/rrbill/';

class RrbillsService {

    

    getAllRrbills(){
              return axios.get(RRBILL_BASE_REST_API_URL);
    }
    
    createRrbill(rrbill){
        return axios.post(RRBILL_BASE_REST_API_URL,rrbill)
    }   
    getRrbillById(rrbillId){
        return axios.get(RRBILL_BASE_REST_API_URL + rrbillId)
    } 
    updateRrbill(rrbillId,rrbill){
        return axios.put(RRBILL_BASE_REST_API_URL+"update/"+rrbillId,rrbill)
    } 
    
    deleteRrbill(rrbillId){
        return axios.delete(RRBILL_BASE_REST_API_URL+rrbillId)
    }

             
}

export default new RrbillsService();