import { unwrapResult } from '@reduxjs/toolkit'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { ModalContext } from '~/layouts/components/Header'
import { login } from '~/features/Auth/userSlice'
import LoginForm from './LoginForm'
function Login() {
    const { setOpen } = useContext(ModalContext)
    const dispatch = useDispatch()
    const handleSubmitForm = async (values) => {
        try {
            values.username = values.email
            const action = login(values)
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
        <LoginForm onSubmitForm={handleSubmitForm} />
    )
}

export default Login