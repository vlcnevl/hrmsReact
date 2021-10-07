import axios from "axios";

let url = "http://localhost:8080/api/jobadvertisement/"
export default class JobAdvertisementService
{
    getAllJobAdvertisements()
    {
        return axios.get(url+"getall")
    }

    getById(id)
    {
        return axios.post(url + "getbyid?id="+id)
    }

}