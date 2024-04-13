import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Protected: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  console.log("persist", currentUser);

  return <>{currentUser ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};

export default Protected;
