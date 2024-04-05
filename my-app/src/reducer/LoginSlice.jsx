import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("LoginUser")) ||
        {
            name: "",
            password: "",
            LoginUser: false,
        },
    },
    reducers: {
        login(state, action) {
            const UserId = action.payload;

            state.user.LoginUser = true;
            const SavedState = JSON.stringify(UserId);
            sessionStorage.setItem("LoginUser", SavedState);

        },
        logout(state, action) {
            state.user = {
                name: "",
                password: "",
                LoginUser: false,
            }
            sessionStorage.clear();
        },


    },
});

export const {
    login,
    logout
} = LoginSlice.actions;

export default LoginSlice.reducer;