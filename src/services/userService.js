
import { requestEz } from "../utils/request"

const userApi = {
    register: async (data) => {
        const url = '/auth/local/register'
        const res = await requestEz.post(url, data)
        return res.data
    },
    login: async (data) => {
        const url = '/auth/local'
        const res = await requestEz.post(url, data)
        return res.data
    },
}
export default userApi

