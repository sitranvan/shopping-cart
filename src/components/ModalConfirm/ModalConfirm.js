import classNames from "classnames/bind"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styles from './ModalConfirm.module.scss'
const cx = classNames.bind(styles)
function ModalConfirm({ icon, title, desc, isShow = false, onShow, onClose, onConfirm }) {


    return (
        <div className={cx('wrapper', {
            show: isShow
        })}>
            <div className={cx('inner')}>
                <div className={cx('head')}>
                    <WarningAmberIcon color="warning" fontSize="large" />
                    <h3 className={cx('title')}>Xóa sản phẩm</h3>
                </div>
                <p className={cx('desc')}>Bạn có muốn xóa sản phẩm đang chọn?</p>
                <div className={cx('action')}>
                    <button className={cx('confirm')} onClick={onConfirm}>Xác nhận</button>
                    <button className={cx('cancel')} onClick={onClose}>Hủy</button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm