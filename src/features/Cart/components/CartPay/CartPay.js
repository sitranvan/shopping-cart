import { Box, Paper, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { formatCurrency } from "~/utils";
import styles from './CartPay.module.scss';

const cx = classNames.bind(styles)
function CartPay({ countItem, totalItem }) {


    return (
        <Box className={cx('wrapper')}>
            <Box className={cx('inner')}>
                <Paper elevation={0}>
                    <Box className={cx('address')}>
                        <Typography className={cx('title')}>Giao tới</Typography>
                        <Box className={cx('info')}>
                            <span>Trần Văn Sĩ</span>
                            <i></i>
                            <span>0388060302</span>
                        </Box>
                        <p className={cx('address-desc')}>
                            <span>Trường</span> 180 Cao Lỗ Trường Đại Học Công Nghệ Sài Gòn, Quận 8, Thành Phố Hồ Chí Minh
                        </p>
                    </Box>
                </Paper>
            </Box>
            <Box className={cx('total')}>
                <Paper elevation={0}>
                    <Box className={cx('total-wrapper')}>
                        <Box className={cx('total-inner', 'total-temp')}>
                            <span>Tạm tính</span>
                            <span> {formatCurrency(totalItem)}</span>
                        </Box>
                        <Box className={cx('total-inner', 'total-sale')}>
                            <span>Giảm giá</span>
                            <span> {formatCurrency(0)}</span>
                        </Box>
                        <Box className={cx('total-inner', 'total-money')}>
                            <span>Tổng tiền</span>
                            <span>
                                {formatCurrency(totalItem)} <br />
                                <p className={cx('vat')}>(Đã bao gồm VAT nếu có)</p>
                            </span>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <button className={cx('buy')}>{`Mua hàng (${countItem})`}</button>
        </Box>
    )
}

export default CartPay