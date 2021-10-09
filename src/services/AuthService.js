import axios from "axios";

let url = "http://localhost:8080/api/auth/";
export default class AuthService {
  candidateRegister(candidate) {
    return axios.post(url + "candidateregister", candidate);
  }

  employerRegister(employer) {
    return axios.post(url + "employerregister", employer);
  }

  candidateOrEmployer(email) {
    return axios.post(url + "candidateoremployer", email);
  }

  employerLogin(user) {
    return axios.post(url + "employerlogin", user);
  }

  candidateLogin(user)
  {
      return axios.post(url+"candidatelogin",user)
  }
}
