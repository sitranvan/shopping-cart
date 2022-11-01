import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material'
import freeShip from '~/assets/images/free-ship.png'
import promotion from '~/assets/images/promotion.png'
import asaIcon from '~/assets/images/asa-icon.png'
import asaNewGif from '~/assets/images/asa-new.gif'
import { formatCurrency, formatText } from '~/utils';
import detailInfoStyles from './detailInfoStyles';
function DetailInfo({ product }) {

    const { name, shortDescription, originalPrice, salePrice, isFreeShip, isPromotion, promotionPercent } = product

    return (
        <Box sx={{ textAlign: 'left', mb: 2 }}>
            <Typography sx={{ ...detailInfoStyles.name }}>{formatText(name)}</Typography>
            <Typography sx={{ ...detailInfoStyles.shortDescription }}>{formatText(shortDescription)}</Typography>
            <Box sx={{ backgroundColor: '#FAFAFA', p: 2, mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component='span' sx={{ ...detailInfoStyles.salePrice }} >{formatCurrency(salePrice)}</Box>
                    {isPromotion && (
                        <Fragment>
                            <Box component='span'
                                sx={{ ...detailInfoStyles.originalPrice }}>{formatCurrency(originalPrice)}
                            </Box>
                            <Box component='span'
                                sx={{ ...detailInfoStyles.promotionPercent }}>-{promotionPercent}%
                            </Box>
                        </Fragment>
                    )}
                </Box>
                {isFreeShip || isPromotion ? (
                    <Box sx={{ ...detailInfoStyles.boxShipPromotion }}>
                        {isFreeShip && (<img height='90%' src={freeShip} alt="freeship" />)}
                        {isPromotion && (<img height='70%' src={promotion} alt="freeship" />)}
                    </Box>
                ) : (<Fragment />)}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ ...detailInfoStyles.label }}>
                        <img height='16px' style={{ marginRight: '5px' }} src={asaIcon} alt="asa-icon" />
                        Thưởng 19,38 ASA (≈ 6.046đ)
                    </Box>
                    <img width='42px' height='20px' style={{ marginLeft: '10px' }} src={asaNewGif} alt="new-gif" />
                </Box>
            </Box>
        </Box>
    )
}

DetailInfo.proTypes = {
    product: PropTypes.object.isRequired
}

export default DetailInfo