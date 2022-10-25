import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './Overlay.module.scss'

const cx = classNames.bind(styles)
function Overlay({ onClick }) {
    return (
        <div onClick={onClick} className={cx('overlay')}></div>
    )
}

Overlay.propTypes = {
    onClick: PropTypes.func
}

export default Overlay