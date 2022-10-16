import { Box, Grid, Skeleton } from '@mui/material'
import PropTypes from 'prop-types'

function ProductSkeleton({ length = 12 }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box p={1}>
                            <Skeleton width='100%' height='200px' />
                            <Skeleton />
                            <Skeleton width='60%' />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

ProductSkeleton.propTypes = {
    length: PropTypes.number
}

export default ProductSkeleton 