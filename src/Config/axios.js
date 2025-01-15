import axios from "axios";

const axios_instance = axios.create({
    baseURL : "https://api.weatherapi.com/v1"
})
export default axios_instance;