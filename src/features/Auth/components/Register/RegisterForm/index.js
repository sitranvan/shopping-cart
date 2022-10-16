import { faClose, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from "classnames/bind"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import PropTypes from 'prop-types'
import Overlay from "~/components/Overlay"
import { modeForm } from "~/constants/mode"
import { ModalContext } from "~/layouts/components/Header"
import styles from './RegisterForm.module.scss'

const cx = classNames.bind(styles)
function RegisterForm({ onSubmitForm }) {
    const contextModal = useContext(ModalContext)
    const { open, setOpen, setMode } = contextModal

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleSwitch = () => {
        setMode(modeForm.LOGIN)
    }
    const schema = yup.object({
        fullName: yup.string().trim()
            .required('Please enter your fullname')
            .test('should has at least two words', 'Please enter at least two words', (values) => {
                return values.split(' ').length >= 2
            }),
        email: yup.string().trim()
            .required('Please enter your email')
            .email('Please enter a valid email address'),

        password: yup.string().trim()
            .required('Please enter your password')
            .min(6, 'Please enter at least 6 character')
            .matches(/(?=.*?[A-Z])/, 'At least one capitalized word'),

        retypePassword: yup.string().trim()
            .required('Please enter your retype password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmitForm = (values) => {
        if (onSubmitForm) {
            onSubmitForm(values)
        }
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
                <h2 className={cx('title')}>Create An Account</h2>
                <form className={cx('form')} onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className={cx('form-input')}>
                        <input {...register('fullName')} type="text" placeholder="Full Name" className={cx({ invalid: errors.fullName })} />
                        <p className={cx('message')}>{errors.fullName?.message}</p>
                    </div>
                    <div className={cx('form-input')}>
                        <input {...register('email')} type="email" placeholder="Email" className={cx({ invalid: errors.email })} />
                        <p className={cx('message')}>{errors.email?.message}</p>
                    </div>
                    <div className={cx('form-input')}>
                        <input {...register('password')} type="password" placeholder="Password" className={cx({ invalid: errors.password })} />
                        <p className={cx('message')}>{errors.password?.message}</p>
                    </div>
                    <div className={cx('form-input')}>
                        <input {...register('retypePassword')} type="text" placeholder="Retype Password" className={cx({ invalid: errors.retypePassword })} />
                        <p className={cx('message')}>{errors.retypePassword?.message}</p>
                    </div>
                    <button className={cx('submit')}>Create an account</button>
                    <p onClick={handleSwitch} className={cx('switch')}>Already have an account</p>

                </form>
            </div>
        </section>
    )
}
RegisterForm.propTypes = {
    onSubmitForm: PropTypes.func
}

export default RegisterForm