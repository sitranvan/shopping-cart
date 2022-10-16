import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './LoadMore.module.scss'

const cx = classNames.bind(styles)
function LoadMore({ pagination, onPageChange }) {
    const { _limit } = pagination
    const handlePageChange = (newPage) => {
        onPageChange(newPage)
    }
    return (
        <section className={cx('wrapper')}>
            <button disabled={_limit >= 20} onClick={() => handlePageChange(_limit + 5)} className={cx('btn', 'btn-next')}>
                <span>LoadMore</span>
            </button>
        </section>
    )
}

LoadMore.propTypes = {
    pagination: PropTypes.object,
    onPageChange: PropTypes.func
}

export default LoadMore