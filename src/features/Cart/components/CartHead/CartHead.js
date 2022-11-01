import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import { Box, Paper } from "@mui/material"
import styles from './CartHead.module.scss'

const cx = classNames.bind(styles)

function CartHead({ countItem }) {
    return (
        <Paper elevation={0}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: '8px 16px'
            }}>

                <Box className={cx('list')} component='ul' sx={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <li className={cx('item')}>{`Tất cả (${countItem} sản phẩm)`}</li>
                    <li className={cx('item')}>Đơn giá</li>
                    <li className={cx('item')}>Số lượng</li>
                    <li className={cx('item')}>Thành tiền</li>
                    <li className={cx('item')}>Xóa</li>

                </Box>
            </Box>
        </Paper>
    )
}

CartHead.propTypes = {
    countItem: PropTypes.number
}

export default CartHead