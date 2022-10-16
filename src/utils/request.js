import axios from "axios";

export const request = axios.create({
    baseURL: 'https://js-post-api.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})
export const requestProducts = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const requestEz = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})
requestEz.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const URLS = ['/auth/local/register', '/auth/local']
    const { config, status, data } = error.response
    if (URLS.includes(config.url) && status === 400) {
        const errorList = data.data || []
        const firstError = errorList.length > 0 ? errorList[0] : {}
        const messageList = firstError.messages || []
        const fistMessage = messageList.length > 0 ? messageList[0] : {}
        throw new Error(fistMessage.message)
    }
    return Promise.reject(error);
});
