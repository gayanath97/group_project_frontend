import axios from "axios";

const RR_BASE_REST_API_URL = 'http://localhost:8080/rr/';

class RrsService{

    getAllRrs(){
              return axios.get(RR_BASE_REST_API_URL);
    }
    
    createRr(rr){
        return axios.post(RR_BASE_REST_API_URL,rr)
    }   
    getRrById(rrId){
        return axios.get(RR_BASE_REST_API_URL + rrId)
    } 
    updateRr(rrId,rr){
        return axios.put(RR_BASE_REST_API_URL+"update/"+rrId,rr)
    } 
    
    deleteRr(rrId){
        return axios.delete(RR_BASE_REST_API_URL+rrId)
    }

             
}

export default new RrsService();