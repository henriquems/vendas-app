import Axios, { AxiosInstance } from "axios";

export const httpClient = Axios.create({
    baseURL: "http://localhost:8080"
})