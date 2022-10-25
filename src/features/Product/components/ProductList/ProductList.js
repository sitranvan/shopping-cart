import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import ProductItem from '../ProductItem'

function ProductList({ data }) {


    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Box >
                            <ProductItem product={product} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

ProductList.propTypes = {
    data: PropTypes.array.isRequired
}

export default ProductList 