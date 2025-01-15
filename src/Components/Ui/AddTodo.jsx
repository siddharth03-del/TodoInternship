import { Button } from "@material-tailwind/react";
import Input from "../Atoms/Input"
import DropDown from "../Molecules/DropDown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, saveTodoInLocalStorage, sortTodosByPriority } from "../../Redux/Slices/TodoSlice";
import LogOutModal from "../Modals/LogOut";
function AddTodo(){
    const [TodoText, setTodoText] = useState("");
    const [Priority, setPriority] = useState(1);
    const [City, setCity] = useState("");
    const dispatch = useDispatch();
    function AddTodoItem(){
        if( TodoText == ""){
            alert("Please type the todo text");
            return;
        }
        if(City == ""){
            alert("Please enter the city");
            return;
        }
        dispatch(addTodo({text : TodoText, priority : Priority, city : City}));
        dispatch(sortTodosByPriority());
        dispatch(saveTodoInLocalStorage());
        setTodoText("");
        setCity("");
        setPriority(1);
    }
    return(
        <div className="flex flex-col mt-3 border-2 rounded-lg border-solid border-black mx-1 md:mx-11">
            <div className="mt-3">
                <Input Text={TodoText} setText={setTodoText} placeholder={"Enter task eg. Do shopping, Do coding etc...."}/>
            </div>
            <div className="mt-3">
                <Input Text={City} setText={setCity} placeholder={"Enter cityname  eg. New Delhi, Paris"}/>
            </div>
            <div className="mt-3 ml-2">
                <DropDown value={Priority} setValue={setPriority}/>
            </div>
            <div className="mt-3 ml-2 mb-3">
                <Button className="w-fit" onClick={()=>{AddTodoItem()}}>Add Todo</Button>
            </div>
            <LogOutModal/>
        </div>
    )
}
export default AddTodo;
