import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/store";

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  
  if (!token?.value) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
