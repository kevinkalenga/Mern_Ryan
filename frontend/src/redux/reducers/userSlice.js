import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userInfo: localStorage.getItem("emailForRegistration") ? JSON.parse(localStorage.getItem("emailForRegistration")) : null
}


export const userSlice = createSlice({
    initialState,
    name: "userSlice",
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("emailForRegistration", JSON.stringify(action.payload))
        },
         logout: (state, action) => {
           state.userInfo = null;
           localStorage.clear();
        }
    }
})

export default userSlice.reducer;