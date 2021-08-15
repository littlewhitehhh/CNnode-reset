import axios from 'axios'

// const requset = function(config) {
export function request(config) {
    const instance = axios.create({
        baseURL: 'https://cnodejs.org/api/v1',
        timeout: 5000
    })


    // 请求拦截
    instance.interceptors.request.use(config => {

        return config
    })

    // 相应拦截
    instance.interceptors.response.use(config => {
        return config
    })

    return instance(config)
}


// export default requset