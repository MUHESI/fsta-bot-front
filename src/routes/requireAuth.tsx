import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useEffect } from "react";
import useAuth from "../components/hooks/useAuth";
import { useEffect } from "react";

function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {}, []);
  return user.full_name !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  // return user.full_name !== "" ? <Outlet /> : <Outlet />;
  // return <Outlet />;
}

export default RequireAuth;
