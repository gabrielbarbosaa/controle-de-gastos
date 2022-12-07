import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 6000
});

export const IBGE = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api'
});

instance.interceptors.request.use(function (config: any){
    const token = localStorage.getItem("token")
    config.headers.Authorization = token ? `Bearer ${token}` : ``;

    return config
})

export const api = instance;