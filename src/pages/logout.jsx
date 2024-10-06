import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";

const logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    //logout logic here
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
export default logout;
