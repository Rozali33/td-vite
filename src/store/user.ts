import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserCountry {
    code: string,
    label: string,
    phone: string,
}

export interface UserState {
    name: string,
    email: string,
    password: string,
    country: UserCountry | null,
    isLoggedIn: boolean,
}

const initialState: UserState = {
    name: '',
    email: '',
    password: '',
    country: {
        code: '',
        label: '',
        phone: ''
    },
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        nameFill: (state: UserState, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        emailFill: (state: UserState, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        passwordFill: (state: UserState, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        countryFill: (state: UserState, action: PayloadAction<UserCountry | null>) => {
            state.country = action.payload
        },
        loggedInApp: (state: UserState) => {
            state.isLoggedIn = true
        }
    }
})

export const {
    nameFill,
    emailFill,
    passwordFill,
    countryFill,
    loggedInApp
} = userSlice.actions

export default userSlice.reducer
