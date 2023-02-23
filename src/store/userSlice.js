import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        id: null,
        email: "",
        nickname: "닉네임을 설정해주세요.",
        first_name: "",
        last_name: "",
        money: 0,
        profile_image: null,
        access_token: null,
        refresh_token: null,
        isLoading: false,
        isLogin: null,
    },
    reducers: {
        loginUser(state, action) {
            state.id = action.payload.pk
            state.email = action.payload.email
            state.nickname = action.payload.nickname
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.money = action.payload.money
            state.profile_image = action.payload.profile_img
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.isLogin = true
        },
        clearUser(state) {
            state.id = null
            state.email = ""
            state.nickname = ""
            state.first_name = ""
            state.last_name = ""
            state.money = 0
            state.profile_image = null
            state.access_token = null
            state.refresh_token = null
            state.isLogin = false
        },
        changeUser(state, action) {
            state.nickname = action.payload.nickname
            state.profile_image = action.payload.profile_image
        }
    }
})

export let { loginUser, clearUser, changeUser } = user.actions;
export default user;