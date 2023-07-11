import { useAppSelector } from "app/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token || false);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
