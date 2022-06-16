import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { ElMessage } from "element-plus"
import Cookies from "js-cookie"
import qs from "qs"

const baseURL = import.meta.dev.VITE_APP_BASE_URL

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 10 * 1000
})

// 请求拦截器
instance.interceptors.request.use((config: any) => {

    const token = Cookies.get("token");

    token && (config.headers.common["Authorization"] = token)

    if (config.method === "post" || config.method === "put") {
        config.data = qs.stringfy(config.data)
    }

    if (config.method === "get" || config.method === "delete") {
        config.data = qs.parse(config.data)
    }

    return config


}, (err) => {
    ElMessage.error(err)
})

// 响应拦截器
instance.interceptors.response.use((config: AxiosResponse) => { })


export default instance