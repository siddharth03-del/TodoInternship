import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo, StoreTodo } from "../../Storage/Todo/TodoStorage";
import { fetchCurrentUser } from "../../Storage/Auth/AuthStorage";
const TodoSlice = createSlice({
    name: "Todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload.text,
                priority: action.payload.priority,
                completed: false,
                city : action.payload.city
            });
        },
        updateCompleteState: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        },
        sortTodosByPriority: (state) => {
            // Create a new sorted array
            const sortedState = [...state].sort((a, b) => a.priority - b.priority);
            // Return the new sorted state
            return sortedState;
        },
        removeTodo : (state, action)=>{
            return state.filter(todo => todo.id !== action.payload.id)
        },
        updateTodoFromLocalStorage : (state, action)=>{
            return action.payload.todo;
        },
        saveTodoInLocalStorage : (state, action)=>{
            console.log(state);
            StoreTodo({todo : state, user : fetchCurrentUser()})
        }
    }
});

export const { addTodo, updateCompleteState, sortTodosByPriority, removeTodo, updateTodoFromLocalStorage, saveTodoInLocalStorage } = TodoSlice.actions;
export default TodoSlice.reducer;