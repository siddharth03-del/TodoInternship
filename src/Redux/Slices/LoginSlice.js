import { createSlice } from "@reduxjs/toolkit";
import { SetCredentials, SetCurrentUser } from "../../Storage/Auth/AuthStorage";
const LoginSlice = createSlice({
    name : "Login",
    initialState : {},
    reducers : {
        LoginFunc : (state, action)=>{
            SetCredentials({email : action.payload.email, password : action.payload.password});
            SetCurrentUser({email : action.payload.email})
            return {User : action.payload.user}
        },
        LogOutFunc : (state, action)=>{
            return {};
        }
    },
})
export const {LoginFunc, LogOutFunc} = LoginSlice.actions;
export default LoginSlice.reducer;