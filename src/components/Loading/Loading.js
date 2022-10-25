import classNames from "classnames/bind";
import styles from './Loading.module.scss'

const cx = classNames.bind(styles)

function Loading() {
    return (
        <div className={cx('loading')}>
            <div className={cx('outer')}></div>
            <div className={cx('middle')}></div>
            <div className={cx('inner')}></div>
        </div>
    )
}

export default Loading