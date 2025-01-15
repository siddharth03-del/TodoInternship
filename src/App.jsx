import { Route , Routes } from "react-router-dom";
import Todo from "./Pages/Todo/Todo";
import Login from "./Pages/Auth/Login";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
function App(){
  return(
    <Routes >
      <Route index path="/" element={<Login/>}/>
      <Route path="/home" element={
        <ProtectedRoute>
        <Todo/>
        </ProtectedRoute>}/>
    </Routes>
  )
}
export default App;