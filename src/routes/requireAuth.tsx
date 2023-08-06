import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { useEffect, useState } from "react";
import { Login } from "@/pages/inde";
import LoadingPage from "@/pages/loading";

function RequireAuth() {
  const user = useRecoilValue(userAuthenticatedState);
  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    if (user) {
      setLoadingInfo(false);
    }
  }, [user]);

  return user.full_name !== null ? (
    <Outlet />
  ) : (
    <>{loadingInfo ? <LoadingPage /> : <Login />} </>
  );

  // user.full_name !== null ? (
  //   <Outlet />
  // ) : (
  //   <>
  //     {user.full_name === null ? (
  //       <Navigate to="/login" state={{ from: location }} replace />
  //     ) : (
  //       <Navigate to="/loading" state={{ from: location }} replace />
  //     )}
  //   </>

  // return user.full_name !== "" ? <Outlet /> : <Outlet />;
}

export default RequireAuth;
