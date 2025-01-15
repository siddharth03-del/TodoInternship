import { useEffect } from "react";
import { NavbarDark } from "../../Components/Organism/Navbar";
import AddTodo from "../../Components/Ui/AddTodo";
import { TodoList } from "../../Components/Ui/TodoList";
import { useDispatch } from "react-redux";
import { updateTodoFromLocalStorage } from "../../Redux/Slices/TodoSlice";
import { fetchCurrentUser } from "../../Storage/Auth/AuthStorage";
import { fetchTodo } from "../../Storage/Todo/TodoStorage";
function Todo(){
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("updated data form local storage");
        const currentUser = fetchCurrentUser();
        console.log(currentUser);
        let todo = fetchTodo(currentUser);
        todo = JSON.parse(todo);
        console.log(todo);
        if(todo == null){
            todo = [];
        }
        dispatch(updateTodoFromLocalStorage({todo}));
    },[])
    return(
        <div className="flex flex-col h-screen">
            <div className="h-auto">
                <NavbarDark/>
            </div>
            <div className="h-auto">
                <AddTodo/>
            </div>
            <div className="flex-1 overflow-y-scroll">
                <TodoList/>
            </div>
        </div>
    )
}
export default Todo;