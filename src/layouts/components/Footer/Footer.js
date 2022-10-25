import classNames from "classnames/bind"
import styles from './Footer.module.scss'
import tikiNow from '~/assets/images/tikinow.png'
import { CONTACT_LIST, LINK_LIST, PAY_LIST } from './data'
const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('logo')}>
                        <img src={tikiNow} alt="logo" />
                    </div>
                    <div className={cx('contact')}>
                        <h2 className={cx('contact-title')}>Liên hệ</h2>
                        <ul className={cx('contact-list')}>
                            {CONTACT_LIST.map(item => (
                                <li key={item.id} className={cx('contact-item')}>
                                    <span className={cx('contact-icon')}>
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('link')}>
                        <h2 className={cx('link-title')}>Kết nối với chúng tôi</h2>
                        <div className={cx('link-list')}>
                            {LINK_LIST.map(item => (
                                <a key={item.id} className={cx('link-item')} href="#notfound" >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={cx('pay')}>
                        <h2 className={cx('pay-title')}>Thanh toán</h2>
                        <ul className={cx('pay-list')}>
                            {PAY_LIST.map(item => (
                                <li key={item.id} className={cx('pay-item')}>
                                    <span>
                                        {item.icon}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer