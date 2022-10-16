import { requestEz } from '~/utils/request';

const productService = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1
            ? 0
            : (params._page - 1) * (params._limit || 50);
        // Remove un-needed key
        delete newParams._page;
        // Fetch product list + count
        const productList = await requestEz.get('/products', {
            params:
                newParams
        });
        const count = await requestEz.get('/products/count', {
            params:
                newParams
        });
        // Build response and return
        return {
            data: productList.data,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: count
            }
        }
    }
}
export default productService