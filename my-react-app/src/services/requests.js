import axios from "axios";

export const requests = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5*1000,
})


 