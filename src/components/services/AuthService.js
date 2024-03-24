import axios from 'axios';


const AUTH_Base_URL= "http://localhost:8080/api/auth";
 
export const registerAPICall=(registerObj)=>axios.post(AUTH_Base_URL+"/register",registerObj);

export const loginAPICall=(username,password)=>axios.post(AUTH_Base_URL+"/login",{username,password});

export const storeToken=(token)=>localStorage.setItem("token",token);

export const getToken=(token)=>localStorage.getItem("token");

export const saveLoggedInUser=(username,role)=>{
    sessionStorage.setItem("authenticatedUser",username);
    sessionStorage.setItem("role",role);
}
export const isLoggedInUser=(username,role)=>{
    const username1=sessionStorage.getItem("authenticatedUser");
    if(username1==null){
    return false;}
    else{
    return true;
    }
    
}
export const getLoggedInUser=()=>{
    const username=sessionStorage.getItem("authenticatedUser");
        return username;
       }
    
export const logout=()=>
{
    localStorage.clear();
    sessionStorage.clear();
   
}
 
export const isAdminUser=()=>{
    let role=sessionStorage.getItem("role");
    if(role!=null && role=="ROLE_ADMIN"){
        return true;
    }
    else{
        return false;
    }
}




 
