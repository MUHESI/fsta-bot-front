import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  // useEffect(() => {}, []);
  return user.full_name !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  // return user.full_name !== "" ? <Outlet /> : <Outlet />;
}

export default RequireAuth;
