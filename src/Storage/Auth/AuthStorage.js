export function SetCredentials(object){
    localStorage.setItem(`${object.email}`, `${object.password}`);
    localStorage.setItem("loggedIn", true);
}
export function SetCurrentUser(object){
    localStorage.setItem("CurrentUser", `${object.email}`);
}
export function fetchCurrentUser(){
    return localStorage.getItem("CurrentUser");
}
export function LogOut(){
    localStorage.setItem("loggedIn", false);
}