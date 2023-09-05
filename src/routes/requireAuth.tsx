import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { useEffect, useState } from "react";
import { Login } from "@/pages";
import LoadingPage from "@/pages/loading";

function RequireAuth() {
  const user = useRecoilValue(userAuthenticatedState);
  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    if (user) {
      setLoadingInfo(false);
    }
  }, [user]);

  // return user.full_name !== null ? (
  return user.full_name === null ? (
    <Outlet />
  ) : (
    <>
      {loadingInfo ? (
        <div className="h-screen flex justify-center items-center">
          <LoadingPage />
        </div>
      ) : (
        <Login />
      )}{" "}
    </>
  );
}

export default RequireAuth;
