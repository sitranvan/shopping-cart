import defaultProduct from '~/assets/images/default-product.webp'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import ReactImageMagnify from "react-image-magnify";
function DetailThumbnail({ product }) {
    const url = product.thumbnail?.url
    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${url}`
        : defaultProduct

    return (
        <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'center', mt: '10px' }}>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'product',
                    isFluidWidth: true,
                    src: `${thumbnailUrl}`,
                    sizes:
                        '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                },
                largeImage: {
                    alt: 'product',
                    src: `${thumbnailUrl}`,
                    width: 1200,
                    height: 1200
                },
            }} />
        </Box>
    )
}


DetailThumbnail.propTypes = {
    product: PropTypes.object
}

export default DetailThumbnail