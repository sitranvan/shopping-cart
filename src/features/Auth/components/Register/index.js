import { unwrapResult } from '@reduxjs/toolkit'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '~/features/Auth/userSlice'
import RegisterForm from './RegisterForm'
import { toast } from 'react-toastify'
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