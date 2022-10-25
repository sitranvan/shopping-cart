import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import queryString from 'query-string';
import { Box, Container, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import productService from "~/services/productService"
import FilterViewer from "../../components/FilterViewer";
import NoProduct from "../../components/NoProduct";
import ProductPagination from "../../components/Pagination";
import ProductFilters from "../../components/ProductFilters";
import ProductList from "../../components/ProductList";
import ProductSkeleton from "../../components/ProductSkeleton ";
import ProductSort from "../../components/ProductSort";
import styles from './ListPage.module.scss'

const cx = classNames.bind(styles)

function ListPage() {
    const { pathname, search } = useLocation()
    const history = useNavigate()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const queryParams = useMemo(() => {
        const params = queryString.parse(search);
        return {
            // default params
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true'
        };
    }, [search])
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 12,
        page: 1,
        count: 1
    })
    useEffect(() => {

        const fetchApi = async () => {
            try {
                setLoading(true)
                const { data, pagination } = await productService.getAll(queryParams)
                setProductList(data)
                setPagination(pagination)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        fetchApi()
    }, [queryParams])


    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParams,
            _page: page
        }
        history({
            pathname: pathname,
            search: queryString.stringify(filters)
        })
    }

    const handleSortChange = (value) => {

        const filters = {
            ...queryParams,
            _sort: value
        }
        history({
            pathname: pathname,
            search: queryString.stringify(filters)
        })
    }


    const handleFiltersChange = (newFilters) => {
        const filters = {
            ...queryParams,
            ...newFilters
        }
        history({
            pathname: pathname,
            search: queryString.stringify(filters)
        })
    }
    const handleChangeViewer = (newFilters) => {

        history({
            pathname: pathname,
            search: queryString.stringify(newFilters)
        })
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid sx={{ width: '250px' }} item>
                        <Paper elevation={0} className={cx('filter')}>
                            <ProductFilters
                                loading={loading}
                                filters={queryParams}
                                onChange={handleFiltersChange}
                                productList={productList}
                            />
                        </Paper>
                    </Grid>
                    <Grid sx={{ flex: 1 }} item >
                        <Paper elevation={0} className={cx('container')}>
                            <ProductSort onChange={handleSortChange} currentSort={queryParams._sort} />
                            <FilterViewer filters={queryParams} onChange={handleChangeViewer} />
                            {
                                (productList.length <= 0 && !loading) ?
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
        </Box >
    );
}

export default ListPage;