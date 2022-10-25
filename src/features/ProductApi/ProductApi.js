
import { useEffect, useState } from 'react'
import { getProduct } from '../../services/productApiServices'
import LoadMore from './components/LoadMore'
import ProductApiItem from './components/ProductApiItem'

function ProductApi() {

    const [products, setProducts] = useState([])
    const [filters, setFilter] = useState({
        limit: 5,
    })
    const [pagination, setPagination] = useState({
        limit: 5,
        total: 1
    })
    useEffect(() => {

        const fetchApi = async () => {

            const resJson = await getProduct(filters)
            const { data, pagination } = resJson
            setProducts(data)
            setPagination(pagination)

        }
        fetchApi()
    }, [filters])

    const handlePageChange = (newPage) => {
        setFilter({
            ...filters,
            limit: newPage
        })
    }

    return (
        <main style={{
            minHeight: '100vh', backgroundColor: '#787878'
        }}>
            <ProductApiItem products={products} />
            <LoadMore pagination={pagination} onPageChange={handlePageChange} />
        </main>
    )
}

export default ProductApi