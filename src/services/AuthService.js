import axios from "axios";

export default class AuthService
{
    candidateRegister(candidate)
    {
       return axios.post("http://localhost:8080/api/auth/candidateregister",candidate)

    }
}