import PropTypes from 'prop-types'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import * as yup from "yup";

import styles from './TodoForm.module.scss';
const cx = classNames.bind(styles);

function TodoForm({ onSubmit }) {
    const schema = yup.object({
        title: yup.string().required('Bat buoc nhap'),
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmitForm = (data) => {
        onSubmit(data)
        reset()
    }

    return (
        <section className={cx('wrapper')} onSubmit={handleSubmit(handleSubmitForm)}>
            <div className={cx('header')} >
                <h2 className={cx('title')}>Todo App</h2>
                <img className={cx('header-img')} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" alt="todo" />
            </div>
            <h3 className={cx('message')}>- Today I need to -</h3>
            <form className={cx('form')} >
                <input {...register('title')} className={cx('input', {
                    error: errors.title
                })} type="text" />
                <button className={cx('btn')} >
                    <span >Add Todo</span>
                </button>
            </form>
        </section>
    )
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func
}

export default TodoForm