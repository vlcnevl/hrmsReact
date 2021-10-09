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
        return axios.get("http://localhost:8080/api/jobadvertisement/getbyid?id="+id)
    }

}