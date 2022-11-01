import { Box, Container, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '~/features/Cart/cartSlice';
import productService from '~/services/productService';
import { toast } from 'react-toastify'
import DetailAdd from '../../components/DetailAdd';
import DetailCommitment from '../../components/DetailCommitment';
import DetailDescription from '../../components/DetailDescription';
import DetailInfo from '../../components/DetailInfo';
import DetailThumbnail from '../../components/DetailThumbnail';
import ProductSkeleton from '../../components/ProductSkeleton ';


function DetailPage() {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchApi = async () => {
            setLoading(true)
            try {
                const data = await productService.getId(productId)
                setProduct(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchApi()
    }, [productId])

    const handleAddProduct = (quanlity) => {

        const action = addToCart({
            id: productId,
            product,
            quanlity,
        })
        dispatch(action)
        toast.success('Thêm vào giỏ hàng thành công', {
            position: "top-right"
        })

    }

    return (
        <Box>
            {loading ? (
                <Box>
                    <Container >
                        <ProductSkeleton length={8} />
                    </Container>
                </Box>
            ) : (
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item sx={{ width: "400px", p: '20px', borderRight: '1px solid rgb(242, 242, 242)' }}>
                                <DetailThumbnail product={product} />
                            </Grid>
                            <Grid item sx={{ flex: 1, p: '20px' }}>
                                <DetailInfo product={product} />
                                <DetailAdd onAdd={handleAddProduct} />
                            </Grid>
                            <Grid item sx={{ width: "250px", p: '20px 12px' }}>
                                <DetailCommitment />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={0}>
                        <DetailDescription product={product} />
                    </Paper>
                </Container>)}
        </Box>
    )
}

export default DetailPage