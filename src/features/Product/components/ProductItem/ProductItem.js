import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import freeShip from '~/assets/images/free-ship.png'
import defaultProduct from '~/assets/images/default-product.webp'
import promotion from '~/assets/images/promotion.png'

function ProductItem({ product }) {
    const url = product.thumbnail?.url
    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${url}`
        : defaultProduct

    return (
        <Box sx={{
            backgroundColor: '#fff',
            '&:hover': {
                cursor: 'pointer',
                boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 20px'
            },
            minHeight: '300px'
        }}>
            <Box sx={{ p: '15px 12px 15px 12px', minHeight: '313.5px' }} >
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <img src={thumbnailUrl}
                        alt={product.name}
                        width="182px"
                        height="182px"
                        style={{
                            flexShrink: 0
                        }}
                    />
                    {product.isFreeShip && (<img src={freeShip} alt="ship"
                        style={{
                            position: 'absolute',
                            width: '136px',
                            height: '24px',
                            bottom: 0,
                            left: 0
                        }} />)}
                </Box>
                <Box textAlign='left' mt='15px' p='0 6px'>
                    <Typography
                        sx={{
                            color: "#38383d",
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            fontSize: '1.3rem',

                        }}
                    >{product.name}
                    </Typography>
                    <Box display='flex' alignItems='center' mt='2px'>
                        <Typography variant='h6' sx={{
                            color: '#ff424e',
                            fontSize: '1.5rem',
                            mt: '2px',
                        }}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                        </Typography>
                        {product.promotionPercent > 0 && (<Typography sx={{
                            ml: 1,
                            color: '#ff424e',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            lineHeight: 1.4,
                            border: ' 1px solid #ff424e',
                            borderRadius: '3px',
                            backgroundColor: '#fff0f1',
                            p: '0 2px'
                        }}>
                            {`-${product.promotionPercent}%`}
                        </Typography>)}
                    </Box>
                    {product.isPromotion && (<img src={promotion} alt="promotion" style={{
                        width: '124px',
                        height: '18px',
                        mt: '5px'
                    }} />)}
                </Box>
            </Box>
        </Box >
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem