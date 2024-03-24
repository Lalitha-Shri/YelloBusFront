import axios from 'axios'
import { getToken } from './AuthService';

const Base_URL= "http://localhost:8080/api/passenger";
const Base_URL1="http://localhost:8080/api/bus/book";
const Base_URL2="http://localhost:8080/api/passenger/email"
const Base_URL3="http://localhost:8080/api/bus/book/passenger"

axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

 export const getAllPassenger=()=>axios.get(Base_URL);

 export const getPassenger=(id)=>axios.get(Base_URL+ "/" + id);

 export const addPassenger=(bus)=>axios.post(Base_URL,bus);

 export const updateTotalPassenger=(id,totalPassenger)=>axios.put(Base_URL+"/updateAvailableTickets"+"/"+id+"/"+totalPassenger);

 export const deletePassenger=(id)=>axios.delete(Base_URL+"/"+id);

 export const addBooking=(busBooking)=>axios.post(Base_URL1,busBooking);

 export const getEmail=(email)=>axios.get(Base_URL2+ "/" + email);

 export const getPassengerById=(id)=>axios.get(Base_URL3+ "/" + id);

 export const cancelTicket=(id)=>axios.put(Base_URL+"/cancelticket/"+id)
 export const getAllBooking=()=>axios.get(Base_URL1);