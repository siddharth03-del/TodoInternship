import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Slices/TodoSlice.js"
import LoginReducer from "../Slices/LoginSlice.js"
import ApiReducer from "../Slices/apiSlice.js"
const TodoStore = configureStore({
    reducer : {
        todos : TodoReducer,
        login : LoginReducer,
        api : ApiReducer
    },
    devTools : true
})
TodoStore.subscribe(()=>{
    console.log(TodoStore.getState().todos);
})
TodoStore.subscribe(()=>{
    console.log(TodoStore.getState().login);
})
TodoStore.subscribe(()=>{
    console.log(TodoStore.getState().api);
})
export default TodoStore;