import { configureStore } from '@reduxjs/toolkit'
import userReducder from '../features/Auth/userSlice'
import cartReduder from '../features/Cart/cartSlice'

const rootReducer = {
    user: userReducder,
    cart: cartReduder
}

const store = configureStore({
    reducer: rootReducer
})
export default store