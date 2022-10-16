import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storageKey from "../../constants/storageKey";
import userApi from '../../services/userService';


export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload)
    localStorage.setItem(storageKey.USER, JSON.stringify(data.user))
    localStorage.setItem(storageKey.TOKEN, data.jwt)
    return data.user
})
export const login = createAsyncThunk('login/register', async (payload) => {
    const data = await userApi.login(payload)
    localStorage.setItem(storageKey.USER, JSON.stringify(data.user))
    localStorage.setItem(storageKey.TOKEN, data.jwt)
    return data.user
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(storageKey.USER)) || {},
        setting: {}
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(storageKey.TOKEN)
            localStorage.removeItem(storageKey.USER)
            state.current = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.current = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.current = action.payload
            })
    }
})

const { actions, reducer } = userSlice
export const { logout } = actions
export default reducer