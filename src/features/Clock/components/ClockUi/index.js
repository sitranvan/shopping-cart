import classNames from "classnames/bind"
import PropTypes from 'prop-types'
import styles from './ClockUi.module.scss'

const cx = classNames.bind(styles)

function ClockUi({ hourMinuteSecond, week, dayMonth }) {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h4 className={cx('weekday')}>{week}</h4>
                <div className={cx('inner-wrapper')}>
                    <h3>{dayMonth}</h3>
                </div>
            </div>
            <div className={cx('clock')}>
                <span className={cx('clock-line')}></span>
                <div className={cx('inner-clock')}>
                    <h2>{hourMinuteSecond}</h2>
                </div>
            </div>
        </section>
    )
}
ClockUi.propTypes = {
    hourMinuteSecond: PropTypes.string.isRequired,
    week: PropTypes.string.isRequired,
    dayMonth: PropTypes.string.isRequired,
}
export default ClockUi