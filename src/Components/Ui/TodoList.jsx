import { List, Card} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import TodoListitem from "../Molecules/TodoListitem";
import { useEffect, useState } from "react";
export function TodoList() {
    const todos = useSelector(state => state.todos);
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [totalIncomplete, setTotalInComplete] = useState(0);
    useEffect(()=>{
      let totalCompleteCount = 0;
      let totalIncompleteCount = 0;
      todos?.map((todo)=>{
        if(todo.completed){
          totalCompleteCount++;
        }else{
          totalIncompleteCount++;
        }
      })
      setTotalCompleted(totalCompleteCount);
      setTotalInComplete(totalIncompleteCount);
    },[todos])
  return (
    <div className="overflow-y-scroll  h-full max-h-full min-h-fit">
      <h1 className="text-xl ml-2 md:ml-10 pt-2">Just DoIt.</h1>
      {totalIncomplete > 0 && <Card className="md:w-[89%] md:mx-auto mt-4">
        <List className="">
          {todos && todos.map((value)=>{
              return (
                <div key={value.id}>
                { !value.completed &&
                  <div className="py-2 border-b-black border-solid border-b-[1px]">
                    <TodoListitem todo={value}/>
                  </div>
                  }
                </div>
              )
          })}
        </List>
      </Card>}
      { totalCompleted > 0 && <Card className="md:w-[89%] md:mx-auto mt-4">
        <h1 className="ml-2">Completed</h1>
        <List className="">
          {todos && todos.map((value)=>{
              return (
                <div key={value.id}>
                  {value.completed  &&  <div className="py-2 border-b-black border-solid border-b-[1px]">
                    <TodoListitem todo={value}/>
                  </div>}
                </div>
              )
          })}
        </List>
      </Card>}
    </div>
  );
}