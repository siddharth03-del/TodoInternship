export function StoreTodo(object){
    localStorage.setItem(`todo_${object.user}`, JSON.stringify(object.todo));
}
export function fetchTodo(user){
    return localStorage.getItem(`todo_${user}`);
}