import { useRef, useState } from "react";
import DeleteIcon from "../Atoms/DeleteIcon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, saveTodoInLocalStorage, updateCompleteState } from "../../Redux/Slices/TodoSlice";
import { useSelect } from "@material-tailwind/react";
import { removeWeatherData, WeatherData } from "../../Redux/Slices/apiSlice";
function TodoListitem({todo}){
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(todo.completed)
    const {data, status, error} = useSelector((state)=> state.api);
    function updateState(){
        console.log("updateState called");
        if(checked){
            dispatch(updateCompleteState({id : todo.id, completed : false}));
            setChecked(false);
            dispatch(saveTodoInLocalStorage());
        }
        else{
            dispatch(updateCompleteState({id : todo.id, completed : true}));
            setChecked(true);
            dispatch(saveTodoInLocalStorage());
        }
        return;
    }
    function removeTheTodo(id){
        dispatch(removeTodo({id : id}));
        dispatch(saveTodoInLocalStorage());
        dispatch(removeWeatherData({id : id}));
        console.log("todo removed");
        return;
    }
    useEffect(()=>{
        if(!data[todo.id]){
            dispatch(WeatherData({taskId: todo.id, city :  todo.city}));
        }
    },[])
    return(
        <div className="w-full flex flex-row">
            <div className="mt-[3px]">
                <input name="framework" checked={checked}  type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-blue-500 transition-all" id={`${todo.id}`} onChange={()=>{
                    updateState();
                }}/>
            </div>
            <div className="ml-3 ">
                {checked ? 
                <h1 className="line-through">{todo.text}</h1>
                :
                <h1>{todo.text}</h1>
                }
            </div>
            <div className="ml-auto flex flex-row">
                <h1 className="font-bold">
                    {data[todo.id] && data[todo.id].current.temp_c}
                </h1>
                <h1 className="font-bold">
                    &deg;C
                </h1>
                <h1 className="ml-1">
                    {data[todo.id] && data[todo.id].location.name}
                </h1>
            </div>
            <div className="ml-2 mr-2 hover:cursor-pointer" onClick={()=>{removeTheTodo(todo.id)}}>
                <DeleteIcon/>
            </div>
        </div>
    )
}
export default TodoListitem;