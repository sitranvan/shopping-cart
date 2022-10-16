import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './Filters.module.scss'

const cx = classNames.bind(styles)
function Filters({ onFilterAll, onFilterNew, onFilterCompleted }) {
    return (
        <section className={cx('wrapper')} >
            <button onClick={onFilterAll} className={cx('action')}>
                <span className={cx('action-item')}>All</span>
            </button>
            <button onClick={onFilterNew} className={cx('action')}>
                <span className={cx('action-item')}>New</span>
            </button>
            <button onClick={onFilterCompleted} className={cx('action')}>
                <span className={cx('action-item')}>Completed</span>
            </button>
        </section>
    )
}

Filters.propTypes = {
    onFilterAll: PropTypes.func,
    onFilterNew: PropTypes.func,
    onFilterCompleted: PropTypes.func
}

export default Filters