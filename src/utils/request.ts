import axios, { AxiosRequestConfig } from "axios"
console.log(import.meta.env,'根路径')
const config:AxiosRequestConfig = {
    baseURL:import.meta.env.BASE_URL,
    timeout:6000
}
const request = axios.create(config)
export default request
