import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    phoneNumber: '',
    name: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhoneNumber(state, action) {
            state.phoneNumber = action.payload
        },
        setName(state, action) {
            state.name = action.payload
        },

    },
})

export const {
    setPhoneNumber,
    setName,
} = authSlice.actions
export default authSlice.reducer
