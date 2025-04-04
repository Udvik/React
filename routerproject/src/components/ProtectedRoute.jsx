import { fakeauth } from "../pages/auth";
import {Navigate} from "react-router-dom"

function ProtectedRoute({children}){
    if(!fakeauth.authenticated){
        return <Navigate to='/' />;
    }
    return children;
}

export default ProtectedRoute;