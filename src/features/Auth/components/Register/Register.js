import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { register } from '~/features/Auth/userSlice'
import RegisterForm from './RegisterForm'
import { ModalContext } from '~/layouts/components/Header'
function Register() {
    const { setOpen } = useContext(ModalContext)
    const dispatch = useDispatch()
    const handleSubmitForm = async (values) => {
        try {
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log(user)
            setOpen(false)
            toast.success('Login successfully')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <RegisterForm onSubmitForm={handleSubmitForm} />
    )
}

export default Register