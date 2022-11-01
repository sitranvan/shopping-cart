import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import astra from '~/assets/images/astra.png';
import logo from '~/assets/images/logo.png';
import { modeForm } from '~/constants/mode';
import Login from '~/features/Auth/components/Login';
import Register from '~/features/Auth/components/Register';
import UserLogin from '../UserLogin';
import styles from './Header.module.scss';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { cartItemCountSelector } from '~/features/Cart/selectors';

const cx = classNames.bind(styles);

export const ModalContext = createContext()
function Header() {

    const [open, setOpen] = useState(false)
    const history = useNavigate()
    const loggedInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loggedInUser.id
    const cartItemCount = useSelector(cartItemCountSelector)

    const [mode, setMode] = useState(modeForm.LOGIN)

    const contextValue = {
        open, setOpen, setMode
    }
    const handleClick = () => {
        setOpen(true)
    }

    const handleClickCart = () => {
        if (!isLoggedIn) {
            setOpen(true)
        } else {
            history({
                pathname: '/cart'
            })
        }

    }
    return (
        <ModalContext.Provider value={contextValue}>
            <header className={cx('header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('logo')}>
                            <NavLink to='/products'>
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
                            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleClickCart}>
                                <Badge badgeContent={cartItemCount} color="error">
                                    <ShoppingCart fontSize='large' sx={{ color: '#fff' }} />
                                </Badge>
                            </IconButton>

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