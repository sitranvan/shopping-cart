import { requestProducts } from '../utils/request'

export const getProduct = async (params) => {

    // Transform _page to _start
    const total = 20
    const newParams = { ...params };
    const productList = await requestProducts.get('/products', {
        params:
            newParams
    });

    return {
        data: productList.data,
        pagination: {
            _limit: params.limit,
            _total: total
        }
    }
}

