import { requestEz } from "~/utils"

const categoryService = {
    getAll: async (params) => {
        const url = '/categories'
        const res = await requestEz.get(url, { params })
        return res.data
    }
}

export default categoryService