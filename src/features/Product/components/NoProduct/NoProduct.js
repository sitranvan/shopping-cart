import { Box } from '@mui/material'
import productNotFound from '~/assets/images/product-not-found.png'
function NoProduct({ style }) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img style={{ marginTop: '100px', ...style }} width="60%" src={productNotFound} alt="product-not-found" />
        </Box>
    )
}

export default NoProduct