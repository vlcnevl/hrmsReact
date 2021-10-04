import axios from "axios";

let url="http://localhost:8080/api/auth/"
export default class AuthService
{
   
    candidateRegister(candidate)
    {
       return axios.post( url + "candidateregister",candidate)

    }

    employerRegister(employer)
    {
        return axios.post( url + "employerregister",employer)
    }

    login(user)
    {
        return axios.post(url + "login",user)
    }
}