import classNames from 'classnames/bind';
import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import astra from '~/assets/images/astra.png';
import logo from '~/assets/images/logo.png';
import { modeForm } from '~/constants/mode';
import Login from '~/features/Auth/components/Login';
import Register from '~/features/Auth/components/Register';
import UserLogin from '../UserLogin';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const ModalContext = createContext()
function Header() {

    const [open, setOpen] = useState(false)
    const loggedInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loggedInUser.id
    const [mode, setMode] = useState(modeForm.LOGIN)

    const contextValue = {
        open, setOpen, setMode
    }
    const handleClick = () => {
        setOpen(true)
    }
    return (
        <ModalContext.Provider value={contextValue}>
            <header className={cx('header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('logo')}>
                            <NavLink to='/'>
                                <img className={cx('logo-img')} src={logo} alt="logo" />
                            </NavLink>
                            <img className={cx('logo-label')} src={astra} alt="label" />
                        </div>
                        <nav className={cx('list')}>
                            <NavLink to='/clock' className={(nav) => cx('item', { active: nav.isActive })}>Clock App</NavLink>
                            <NavLink to='/posts' className={(nav) => cx('item', { active: nav.isActive })}>Post Items</NavLink>
                            <NavLink to='/todo' className={(nav) => cx('item', { active: nav.isActive })}>Todo App</NavLink>
                            <NavLink to='/product-api' className={(nav) => cx('item', { active: nav.isActive })}>Product Api</NavLink>
                            {!isLoggedIn && (<NavLink onClick={handleClick} className={cx('item')}>Log In</NavLink>)}
                            {isLoggedIn && (<UserLogin />)}
                        </nav>
                    </div>
                </div>
            </header>
            {mode === modeForm.LOGIN && <Login />}
            {mode === modeForm.REGISTER && <Register />}
        </ModalContext.Provider>

    )
}
export default Header