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
            state.user.LoginUser = true; // 사용자 로그인상태 업데이트
            const SavedState = JSON.stringify(UserId);
            sessionStorage.setItem("LoginUser", SavedState); // sessionStorage에 사용자 정보 저장

        },
        logout(state, action) {
            state.user = {
                name: "",
                password: "",
                LoginUser: false,
            } // 사용자 상태 초기화
            sessionStorage.clear(); // sessionStorage 초기화
        },


    },
});

export const {login,logout} = LoginSlice.actions;

export default LoginSlice.reducer;