import axios from 'axios'


const Base_URL= "http://localhost:8080/user";
  export const getUser=(name)=>axios.get(Base_URL+ "/" + name);
  export const modifyPassword=(user)=>axios.post(Base_URL,user);