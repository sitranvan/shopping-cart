
import { request } from '../utils/request'

export const getTitle = async (params) => {
    const url = 'posts'
    const res = await request.get(url, { params })
    return res.data
}