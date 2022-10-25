import classNames from "classnames/bind"
import { Typography } from "@mui/material"
import RoomIcon from '@mui/icons-material/Room';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Address.module.scss'

const cx = classNames.bind(styles)

function Address() {
    return (
        <div className={cx('wrapper')}>
            <Typography variant="h6" sx={{
                fontSize: '1.3rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                height: '48px',
                lineHeight: '48px',
                color: '#000',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid #cacaca',
                userSelect: 'none'
            }}>
                <HomeIcon sx={{ mr: '5px', mb: '1px' }} />
                Địa chỉ giao hàng
            </Typography>

            <div className={cx('inner')}>
                <span className={cx('icon')}>
                    <RoomIcon fontSize="large" />
                </span>
                <p className={cx('address')}>180 Cao Lỗ Trường Đại Học Công Nghệ Sài Gòn</p>
            </div>
        </div>
    )
}

export default Address