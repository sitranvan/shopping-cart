import { faClose, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PropTypes from 'prop-types'
import Overlay from "~/components/Overlay"
import styles from './LoginForm.module.scss'
import { modeForm } from "~/constants/mode"
import { ModalContext } from "~/layouts/components/Header"



const cx = classNames.bind(styles)
function LoginForm({ onSubmitForm }) {

    const contextModal = useContext(ModalContext)
    const { open, setOpen, setMode } = contextModal

    const handleCloseModal = () => {
        setOpen(false)
    }

    const schema = yup.object({
        identifier: yup.string().trim()
            .required('Please enter your email')
            .email('Please enter a valid email address'),

        password: yup.string().trim()
            .required('Please enter your password')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })

    const handleSubmitForm = (values) => {
        if (onSubmitForm) {
            onSubmitForm(values)
        }
    }
    const handleSwitch = () => {
        setMode(modeForm.REGISTER)
    }

    return (
        <section className={cx('wrapper', {
            open: open
        })}>
            <Overlay />
            <div className={cx('inner')}>
                <button onClick={handleCloseModal} className={cx('close')}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <button className={cx('head')}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <h2 className={cx('title')}>Login</h2>
                <form className={cx('form')} onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className={cx('form-input')}>
                        <input {...register('identifier')} type="email" placeholder="Email" className={cx({ invalid: errors.identifier })} />
                        <p className={cx('message')}>{errors.identifier?.message}</p>
                    </div>
                    <div className={cx('form-input')}>
                        <input {...register('password')} type="password" placeholder="Password" className={cx({ invalid: errors.password })} />
                        <p className={cx('message')}>{errors.password?.message}</p>
                    </div>
                    <button className={cx('submit')}>Log in</button>
                    <p onClick={handleSwitch} className={cx('switch')}>Do not have an account</p>
                </form>
            </div>
        </section>
    )
}

LoginForm.propTypes = {
    onSubmitForm: PropTypes.func
}

export default LoginForm