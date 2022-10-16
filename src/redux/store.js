import { configureStore } from '@reduxjs/toolkit'
import userReducder from '../features/Auth/userSlice'

const rootReducer = {
    user: userReducder
}

const store = configureStore({
    reducer: rootReducer
})
export default store