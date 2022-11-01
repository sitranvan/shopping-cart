
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Paper } from '@mui/material';
import classNames from 'classnames/bind';
import { FastIcon } from '~/components/Icons';
import { formatCurrency } from '~/utils';
import thumbnailImg from '~/utils';
import styles from './CartItems.module.scss';
const cx = classNames.bind(styles)


function CartItems({ product, onRemove, onDecrease, onIncrease, totalPriceProduct }) {


  return (
    <Fragment>
      {product.map((item) => (
        <Paper key={item.id} elevation={0} className={cx('wrapper')}>
          <Box className={cx('inner')} p={2}>
            <div className={cx('product')}>
              <img src={thumbnailImg(item)} alt={item.product.name} className={cx('img')} />
              <div className={cx('content')}>
                <p className={cx('desc')}>{item.product.shortDescription}</p>
                <div className={cx('label')}>
                  <FastIcon />
                  <span>Giao tiết kiệm</span>
                </div>
              </div>
            </div>
            <span className={cx('price')}>{formatCurrency(item.product.salePrice)}</span>
            <div className={cx('quanlity')}>
              <button className={cx('quanlity-icon')} onClick={() => onDecrease(item.product.id)}>
                <RemoveIcon sx={{ color: '#787878' }} />
              </button>

              <span>{item.quanlity}</span>
              <button className={cx('quanlity-icon')} onClick={() => onIncrease(item.product.id)}>
                <AddIcon sx={{ color: '#787878' }} />
              </button>

            </div>
            <span className={cx('total-product')}>{totalPriceProduct(item.id)}</span>
            <div className={cx('remove')} onClick={() => onRemove(item.product.id)}>
              <DeleteOutlineIcon fontSize='large' sx={{ color: '#787878' }} />
            </div>
          </Box>
        </Paper>
      ))}
    </Fragment>
  )
}

CartItems.propTypes = {
  product: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  totalPriceProduct: PropTypes.func.isRequired
}

export default CartItems