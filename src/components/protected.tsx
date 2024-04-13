import { useSelector, UseSelector } from "react-redux"; 
import { Outlet, Navigate,RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { rootReducer } from "../store/store";
  
 

interface ProtectedRouteProps extends RouteProps {}
const Protected : React.FC= () =>{
    const { isLoggedIn} = useAuth();
const   {currentUser} =   useSelector((state: any)  =>  state.user)
    
    console.log('persist',currentUser);
     
    return(<>
        { currentUser ?<Outlet/>:  <Navigate to="/auth/login"/>}
    
    </>)
 
 } 

export  default Protected