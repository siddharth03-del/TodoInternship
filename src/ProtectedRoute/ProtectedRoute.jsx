
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ children }) => {
    const loggedIn = localStorage.getItem("loggedIn");
    console.log(!loggedIn);
    if(loggedIn == "false") {
        console.log("You must be logged in");
        return <Navigate to="/" />;
    }

    return children;
};