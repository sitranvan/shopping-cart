
import { Box, Container, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import productService from "~/services/productService"
import FilterViewer from "../../components/FilterViewer";
import NoProduct from "../../components/NoProduct";
import ProductPagination from "../../components/Pagination";
import ProductFilters from "../../components/ProductFilters";
import ProductList from "../../components/ProductList";
import ProductSkeleton from "../../components/ProductSkeleton ";
import ProductSort from "../../components/ProductSort";
function ListPage() {
    const history = useNavigate()
    const { pathname, search } = useLocation()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const queryParams = queryString.parse(search)
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 12,
        page: 1,
        count: 1
    })

    const [filters, setFilters] = useState(() => {
        return {
            ...queryParams,
            _page: Number.parseInt(queryParams._page) || 1,
            _limit: Number.parseInt(queryParams._limit) || 12,
            _sort: queryParams._sort || 'salePrice:ASC'
        }
    })
    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const { data, pagination } = await productService.getAll(filters)
                setProductList(data)
                setPagination(pagination)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        fetchApi()
    }, [filters])

    // sync URL
    useEffect(() => {
        history({
            pathname: pathname,
            search: queryString.stringify(filters)
        })
    }, [history, filters, pathname])

    const handlePageChange = (e, page) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page: page
        }))
    }

    const handleSortChange = (value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _sort: value
        }))
    }

    const handleFiltersChange = (newFilters) => {
        setFilters(prevFilters => (
            {
                ...prevFilters,
                ...newFilters
            }
        ))
    }
    const handleChangeViewer = (newFilters) => {
        setFilters(newFilters)
    }


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid sx={{ width: '240px' }} item>
                        <Paper elevation={0}>
                            <ProductFilters
                                loading={loading}
                                filters={filters}
                                onChange={handleFiltersChange}
                                productList={productList}
                            />
                        </Paper>
                    </Grid>
                    <Grid sx={{ flex: 1 }} item >
                        <Paper elevation={0}>
                            <ProductSort onChange={handleSortChange} currentSort={filters._sort} />
                            <FilterViewer filters={filters} onChange={handleChangeViewer} />
                            {
                                (productList.length <= 0 && loading === false) ?
                                    (
                                        <Paper elevation={0}>
                                            <NoProduct />
                                        </Paper>
                                    ) :
                                    (
                                        <Paper elevation={0}>
                                            {loading ? <ProductSkeleton /> : <ProductList data={productList} />}
                                            <ProductPagination onChange={handlePageChange} pagination={pagination} />
                                        </Paper>
                                    )
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;