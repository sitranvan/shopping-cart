import React, { useState } from 'react';
import { faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { logout } from '~/features/Auth/userSlice';
import avatar from '~/assets/images/avatar.jfif'
import styles from './UserLogin.module.scss';
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function UserLogin() {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const hanldleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleLogout = async () => {
        setShowMenu(false)
        const action = logout()
        await dispatch(action)
        toast.error("Logout successfully")
    }

    return (
        <div className={cx('user')}>
            <img onClick={hanldleShowMenu} src={avatar} alt="avatar" className={cx('avatar')} />
            <div className={cx('menu', {
                'show-menu': showMenu
            })}>
                <ul className={cx('menu-list')}>
                    <li className={cx('menu-item')}>
                        My account
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />
                    </li>
                    <li className={cx('menu-item')}>
                        Setting
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faGear} />
                    </li>
                    <li className={cx('menu-item')} onClick={handleLogout}>
                        Log out
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faRightFromBracket} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserLogin